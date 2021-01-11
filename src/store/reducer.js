import * as actions from './actionTypes';

const initialState = {
    restaurants: [],
    favourites: [],
    // favouritesToRender is used by SortingComponent to store
    // sorted favourite restaurants. If this store property is
    // not empty, FavouriteRestaurantsComponent renders
    // favouritesToRender instead of favourites array
    favouritesToRender: [],
    restaurantsToRender: [],
    selectedSort: '',
    selectedSortLabel: ''
};

// The job of a reducer is to return current state based on the action
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.ADDED_RESTAURANT_TO_FAVOURITE:
            return {
                ...state,
                favourites: [...state.favourites, action.payload.restaurant]
            };

        case actions.REMOVED_RESTAURANT_FROM_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter(({name}) => name !== action.payload.restaurant.name)
            };

        case actions.SORTED_RESTAURANTS:
            return {
                ...state,
                restaurantsToRender: action.payload.restaurants,
                favouritesToRender: action.payload.favourites
            };

        case actions.FILTERED_RESTAURANTS:
            return {
                ...state,
                restaurantsToRender: action.payload.restaurants
            };

        case actions.ADDED_DEFAULT_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload.restaurants
            };

        case actions.LOADED_FAVOURITE_RESTAURANTS:
            return {
                ...state,
                favourites: action.payload.restaurants
            };

        case actions.RESTORED_RESTAURANTS_TO_RENDER:
            return {
                ...state,
                restaurantsToRender: action.payload.restaurants
            };

        case actions.RESTORED_FAVOURITE_RESTAURANTS_TO_RENDER:
            return {
                ...state,
                favouritesToRender: action.payload.restaurants
            };

        case actions.SET_SELECTED_SORT_PROPERTIES:
            return {
                ...state,
                selectedSort: action.payload.selectedSort,
                selectedSortLabel: action.payload.selectedSortLabel
            };

        default:
            return state;
    }
}

