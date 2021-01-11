import { createStore } from "redux";
import { loadState } from "./localstorage";
import reducer from "./reducer";

/*
* CREATING A REDUX STORE
* 1. Design the store
* {
    favourites: Array<Restaurant> // array of favourite restaurants
    favouritesToRender: Array<Restaurant>
    restaurants: Array<Restaurant> // fetched from an API
    restaurantsToRender: Array<Restaurant> // serves as state for RestaurantListBuilder
    selectedSort: String
    selectedSortLabel: String
}
*
* 2. Define the actions
* - "add restaurant to favourite"
* - "remove restaurant from favourite"
* - "sort restaurants"
* - "filter restaurants" etc
*
* 3. Create a reducer
* PATH: src/store/reducer.js
*
* 4. Set up the store
* PATH: src/store/store.js
* */

const persistedState = loadState();
const store = createStore(reducer, persistedState);

export default store;
