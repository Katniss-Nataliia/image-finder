import React, { Component } from "react";
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';

export class ImageSearch extends Component {
    state = {
        topic: '',
    }

    //function to hande changes in the search intut

    handleSearchChange = e => {
        this.setState({
            topic: e.target.value,
        });
    };

    //function to handle search from submission
    handleSubmit = async e => {
        e.preventDefault();
        const {topic} = this.state; //Destructuring searchText from state
        const {onSearchSubmit} = this.props;

        if (topic.trim() === ''){
            return; //Don't perform search if the input is empty
        }
        // Call the function passed from App component to initiate the search
        onSearchSubmit(topic, 1); // Passing search text and initial page (missing logic to change the page)
        this.setState({topic: ''})
        // Logging the current state of the gallery array
        console.log('react file:Search.js gallery: ', this.state.gallery)
         
    }
    render() {
        const { topic } = this.state;
        const {handleSubmit, handleSearchChange} = this;
        return (
            <div>
                <header className={s.searchbar}>
                
                    <form className={s.form}>
                        <button type="submit"
                            className={s.button}
                            onClick={handleSubmit}>
                            <span className={s.buttonLabel}><BsSearch fill="#3f51b5"/></span>
                        </button>

                        <input
                            className={s.input}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            value={topic}
                            onChange={handleSearchChange}
                        />
                    </form>
                    </header>

            </div>
        )
    }
}
ImageSearch.propTypes = {
    onSubmit:PropTypes.func.isRequired
}
