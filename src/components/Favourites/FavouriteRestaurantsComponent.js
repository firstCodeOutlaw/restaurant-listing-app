import React from 'react';
import RestaurantCardComponent from "../RestaurantCard/RestaurantCardComponent";
import { connect } from 'react-redux';

/**
 * Shows list of favourite restaurants.
 */
class FavouriteRestaurantsComponent extends React.Component {
    render() {
        const favouriteRestaurants = this.props.favouritesToRender.length
            ? this.props.favouritesToRender : this.props.favourites;

        const elementToRender = this.props.favourites.length ?
            <div>
                {
                    favouriteRestaurants.map((restaurant) =>
                        <RestaurantCardComponent key={ restaurant.name } restaurant={ restaurant } />
                    )
                }
            </div>
            : <p>You have no favourite restaurants</p>;

        return (
            <div>
                <h2 style={{ marginBottom: '.5em' }}>Favourites</h2>
                <hr/>
                { elementToRender }
                <hr/>
            </div>
        );
    }
}

/**
 * Exposes Redux store properties via props to FavouriteRestaurantsComponent
 * @param state {Object}
 * @returns {{restaurants: ([]|*), restaurantsToRender: ([]|*)}}
 */
const mapStateToProps = state => ({
    favourites: state.favourites,
    favouritesToRender: state.favouritesToRender
});

export default connect(mapStateToProps)(FavouriteRestaurantsComponent);
