import { Component } from "react";

export class ImageSearch extends Component {
    state = {
        searchText: '',
    }

    //function to hande changes in the search intut

    handleSearchChange = e => {
        this.setState({
            searchText: e.target.value,
        });
    };

    //function to handle search from submission
    handleSubmit = async e => {
        e.preventDefault();
        const {searchText} = this.state; //Destructuring searchText from state
        const {onSearchSubmit} = this.props;

        if (searchText.trim() === ''){
            return; //Don't perform search if the input is empty
        }
        // Call the function passed from App component to initiate the search
        onSearchSubmit(searchText, 1); // Passing search text and initial page (missing logic to change the page)

        // Logging the current state of the gallery array
        console.log('react file:Search.js gallery: ', this.state.gallery)
         
    }
    render() {
        const { searchText } = this.state;
        return (
            <div>
                <header className="Searchbar">
                    <form className="SearchForm">
                        <button type="submit"
                            className="SearchForm-button"
                            onClick={this.handleSubmit}>
                            <span className="SearchForm-button-label">GO</span>
                        </button>

                        <input
                            className="SearchForm-input"
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            value={searchText}
                            onChange={this.handleSearchChange}
                        />
                    </form>
                </header>

            </div>
        )
    }
}