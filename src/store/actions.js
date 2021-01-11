import * as actions from "./actionTypes";

/**
 * Removes restaurant from favourites array in Redux store
 * @param restaurant {Object}
 * @returns {{payload: {restaurant: {name: string}}, type: string}}
 */
export const removeRestaurantFromFavourite = (restaurant) => ({
    type: actions.REMOVED_RESTAURANT_FROM_FAVOURITE,
    payload: {
        restaurant: { name: restaurant.name }
    }
});

/**
 * Adds restaurant to favourites array in Redux store
 * @param restaurant {Object}
 * @returns {{payload: {restaurant}, type: string}}
 */
export const addRestaurantToFavourite = (restaurant) => ({
    type: actions.ADDED_RESTAURANT_TO_FAVOURITE,
    payload: {
        restaurant: restaurant
    }
});

/**
 * Updates restaurantsToRender object in Redux store with
 * sorted collection of restaurants
 * @param restaurants {Object}
 * @returns {{payload: {restaurants}, type: string}}
 */
export const sortRestaurants = (restaurants, favourites) => ({
    type: actions.SORTED_RESTAURANTS,
    payload: {
        restaurants: restaurants,
        favourites: favourites
    }
});

/**
 * Updates restaurantsToRender object in Redux store with
 * a filtered array of restaurant objects
 * @param restaurants {Object}
 * @returns {{payload: {restaurants}, type: string}}
 */
export const filterRestaurants = (restaurants) => ({
    type: actions.FILTERED_RESTAURANTS,
    payload: {
        restaurants: restaurants
    }
});

/**
 * Updates restaurants object in Redux store with restaurants
 * parsed from data.json
 * @param restaurants {Object}
 * @returns {{payload: {restaurants}, type: string}}
 */
export const addDefaultRestaurants = restaurants => ({
    type: actions.ADDED_DEFAULT_RESTAURANTS,
    payload: {
        restaurants: restaurants
    }
});

/**
 * Updates favourite restaurants object in Redux store by
 * fetching the one in local storage
 * @param restaurants {Object}
 * @returns {{payload: {restaurants}, type: string}}
 */
export const loadFavouriteRestaurants = restaurants => ({
    type: actions.LOADED_FAVOURITE_RESTAURANTS,
    payload: {
        restaurants: restaurants
    }
});

/**
 * Set restaurantsToRender in Redux store to an empty array
 * @returns {{payload: {restaurants: []}, type: string}}
 */
export const restoreRestaurantsToRender = () => ({
    type: actions.RESTORED_RESTAURANTS_TO_RENDER,
    payload: {
        restaurants: []
    }
});

/**
 * Set favouriteRestaurantsToRender in Redux store to an empty array
 * @returns {{payload: {favouriteRestaurantsToRender: []}, type: string}}
 */
export const restoreFavouriteRestaurantsToRender = () => ({
    type: actions.RESTORED_FAVOURITE_RESTAURANTS_TO_RENDER,
    payload: {
        favouriteRestaurantsToRender: []
    }
});

/**
 * Set selected sort properties in Redux store
 * @param sortBy {String}
 * @param sortLabel {String}
 * @returns {{payload: {selectedSortLabel, selectedSort}, type: string}}
 */
export const setSelectedSortProperties = (sortBy, sortLabel) => ({
    type: actions.SET_SELECTED_SORT_PROPERTIES,
    payload: {
        selectedSort: sortBy,
        selectedSortLabel: sortLabel
    }
});
