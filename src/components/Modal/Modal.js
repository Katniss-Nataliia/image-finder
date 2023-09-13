import Modal from 'react-modal';
import s from './Modal.module.css'

const customStyles = {
    content:{
        top:'50%',
        left:'50%',
        right:'auto',
        bottom:'auto',
        marginRight:'-50%',
        transform:'translate(-50%, -50%)',
    }
};

Modal.setAppElement('#root');

export const ImageModal = ({isOpen, largeImageURL, onClose}) =>{
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel='Image modal'
        >
            <div>
                <div className={s.modal}>
                    <img src={largeImageURL} alt='picture' width='640'/>
                </div>

            </div>

        </Modal>
    )
}