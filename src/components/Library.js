import React from 'react';
import BookCard from './BookCard';

class Library extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catalog: []
        };
    }

    componentDidMount() {
        var searchUrl = "http://openlibrary.org/search.json?q=the+lord+of+the+rings&fields=title+key";
        fetch(searchUrl)
            .then(resp => resp.json())
            .then(response => {
                this.setState({
                    catalog: response.docs
                });
            });

    }

    renderCatalog() {
        if (this.state.catalog.length === 0) {
            return <h3>Loading...</h3>
        } else {
            return this.state.catalog.map(book =>
                <BookCard
                    key={book.key}
                    title={book.title}
                />
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Library Component</h2>
                {this.renderCatalog()}
            </div>
        );
    }
}

export default Library;
