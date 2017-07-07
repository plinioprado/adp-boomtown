import React, { Component } from 'react';
import Items from './Items';
import './styles.css';

class ItemsContainer extends Component {

    render() {

        return (
            <div className="item-container">
                <Items key={1} />
                <Items key={2} />
                <Items key={3} />
                <Items key={4} />
                <Items key={5} />
                <Items key={6} />
                <Items key={7} />
            </div>
        );
    }
}

export default ItemsContainer;
