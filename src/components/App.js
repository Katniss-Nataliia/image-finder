import React, {Component} from 'react';
import { ImageSearch } from './Searchbar';
import { ImageCard } from './ImageGallery';
import { fetchImages } from '../services/api';
import { ImageModal } from './Modal';
import Button from './Button';

const ERROR_MSG = `Something went wrong, please reload the page`;

export class App extends Component {
    // Initialize the state with empty gallery, loading flag, and error
    state={
        gallery:[],
        isLoading:false,
        error:null,
        selectedImg: null,
        page: 1,
        topic: '',
        
    }

    //Function to handle search submition
    handleSearchSubmit = async (searchText, page) => {
        try{
            //Set loading state and clear previous error
            this.setState({
                isLoading:true,
                error:null,
            })

            //Fetch images based on search text and page number
            const fetchedImages = await fetchImages(searchText, page);

            //update the gallery state with fetched images
            this.setState({
                gallery:fetchedImages.hits,
            })
        }catch(error){
            this.setState({
                error:error.message || 'Something went wrong'
            })
        }finally{
            this.setState({
                isLoading:false,
            })
        }
    };

    setSelectedImg = (largeImageURL) => {
        this.setState({
            selectedImg:largeImageURL
        })
    }

    onLoadMoreButtonClick = e => {
        e.preventDefault();
        this.setState(({page})=>({
            page: page + 1
        }))
        
    }

    render(){
        const {gallery, isLoading, error, selectedImg} = this.state;
        return(
            <div className='App'>
                {/* render the Searchbar component */}
                <ImageSearch onSearchSubmit={this.handleSearchSubmit} />
                {/* Render loading message, error message, or ImageCard */}
                {
                isLoading?(
                    <p>Loading...</p>
                ) : error ? (
                    <p>{ERROR_MSG}</p>
                ) : (
                    gallery.length > 0 && <ImageCard gallery={gallery} onImageClick ={this.setSelectedImg}/>
                )
            }
                {gallery.length > 0 && (
                        <Button onClick={this.onLoadMoreButtonClick} />
                    )}

            

            <ImageModal
                isOpen={selectedImg !== null}
                onClose={() => this.setSelectedImg(null)}
                largeImageURL={selectedImg}
            />
            </div>
        )
    }
}