import React from 'react';
import RestaurantCardComponent from "../RestaurantCard/RestaurantCardComponent";
import FavouriteRestaurantsComponent from "../Favourites/FavouriteRestaurantsComponent";
import { connect } from "react-redux";

/**
 * Shows list of restaurants.
 */
class RestaurantListBuilderComponent extends React.Component {
    render() {
        const restaurantsToRender = this.props.restaurantsToRender.length
            ? this.props.restaurantsToRender : this.props.restaurants;

        return (
            <div>
                <FavouriteRestaurantsComponent />
                <h2>Other Restaurants</h2>
                <div>
                    {
                        restaurantsToRender.map((restaurant) =>
                            <RestaurantCardComponent key={ restaurant.name } restaurant={ restaurant }/>
                        )
                    }
                </div>
            </div>
        );
    }
}

/**
 * Exposes Redux store properties via props to RestaurantListBuilderComponent
 * @param state {Object}
 * @returns {{restaurants: ([]|*), restaurantsToRender: ([]|*)}}
 */
const mapStateToProps = state => ({
    restaurants: state.restaurants,
    restaurantsToRender: state.restaurantsToRender
});

export default connect(mapStateToProps)(RestaurantListBuilderComponent);
