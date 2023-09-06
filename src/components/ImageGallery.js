import React, {Component} from 'react';

export class ImageCard extends Component{
    render(){
        const {gallery} = this.props;
        return(
            <ul className='ImageGallery'>
                {gallery.map(({id, webformatURL, tags, largeImageURL})=>(
                    <li key={id} className='ImageGalleryItem'>
                        <img
                        className='ImageGalleryItem-image'
                        src={webformatURL}
                        alt={tags}
                        onClick={() => this.props.onImageClick(largeImageURL)}
                        />
                    </li>
                ))}
            </ul>
        )
    }
}