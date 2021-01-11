import React from 'react';
import './App.css';
import store from "./store/store";
import { addDefaultRestaurants } from "./store/actions";
import RestaurantListBuilderComponent from "./components/RestaurantListBuilder/RestaurantListBuilderComponent";
import FilterComponent from "./components/Filter/FilterComponent";
import SortingComponent from "./components/Sorting/SortingComponent";
import { saveState } from "./store/localstorage";
import throttle from 'lodash/throttle';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.getData();
    }

    /**
     * Mock an API call by parsing sample data from public/data.json
     */
    getData() {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(
            response => response.json()
        ).then(data => {
            this.props.dispatch(addDefaultRestaurants(data.restaurants));
        });
    }

    render() {
        return (
            <>
                <h1>Restaurant List</h1>
                <div id="top-holder">
                    <div>
                        <FilterComponent />
                    </div>
                    <div>
                        <SortingComponent />
                    </div>
                </div>
                <RestaurantListBuilderComponent />
            </>
        );
    }
}

// store.subscribe() takes a call back function that is called
// everytime store is updated. Lodash throttle is used to
// ensure that saveState() is not called too often (it's
// called once a second)
const unsubscribe = store.subscribe(throttle(() => {
    saveState({
        // Favourites is the only state we want to persist in
        // local storage
        favourites: store.getState().favourites,
        favouritesToRender: [],
        restaurants: [],
        restaurantsToRender: [],
        selectedSort: '',
        selectedSortLabel: ''
    })
}, 1000));

export default connect()(App);
