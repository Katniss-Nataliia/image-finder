import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';
const myAPIKey = '37619405-9719ac033b63a10770946e8e1';

export const fetchImages = async(topic, page) =>{
   
    try{
        const response = await axios.get(
            `${baseURL}?q=${topic}&page=1&key=${myAPIKey}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
        );
        return response.data;

    }catch(error){
        console.log(error);
        throw error
    }
}