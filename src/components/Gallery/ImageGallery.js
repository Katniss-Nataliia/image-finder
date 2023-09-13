import React, {Component} from 'react';
import s from './Gallery.module.css'

export class ImageCard extends Component{
    render(){
        const {gallery} = this.props;
        return(
            <ul className={s.gallery}>
                {gallery.map(({id, webformatURL, tags, largeImageURL})=>(
                    <li key={id} className={s.item}>
                        <img
                        className={s.image}
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