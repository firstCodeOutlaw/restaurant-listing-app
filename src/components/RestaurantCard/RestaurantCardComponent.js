import React from 'react';
import { connect } from "react-redux";
import { addRestaurantToFavourite, removeRestaurantFromFavourite } from "../../store/actions";

/**
 * Shows details of a restaurant including name, current opening
 * state, the selected sort, the sort value and whether that
 * restaurant is a favourite or not.
 */
class RestaurantCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.toggleFavourite = this.toggleFavourite.bind(this);
    }

    /**
     * Removes a restaurant object from favourites array in Redux store
     * if restaurant is already a favourite. Otherwise, the restaurant
     * object is added to favourites array in Redux store.
     */
    toggleFavourite () {
        if (!this.props.favourites.filter((item) => item.name === this.props.restaurant.name).length) {
            // Our event dispatcher has been exposed to this class via connect().
            // So we can dispatch actions within this class to make changes to
            // Redux store
            this.props.dispatch(addRestaurantToFavourite(this.props.restaurant));
        } else {
            this.props.dispatch(removeRestaurantFromFavourite(this.props.restaurant));
        }
    };

    render() {
        return (
            <div className="card">
                { this.props.restaurant.name }
                <br/>
                <span>
                    <button
                        style={
                            this.props.favourites.filter((item) => item.name === this.props.restaurant.name).length
                                ? {fontWeight: "bold", color: "blue"} : {}
                        }
                        onClick={this.toggleFavourite}
                    >
                        Favourite
                    </button>
                </span>
                <br/>
                <span>Sort Value:&nbsp;
                    { this.props.selectedSort.length
                        ? this.props.restaurant.sortingValues[this.props.selectedSort]
                        : ''
                    }
                </span>
                <br/>
                <span>Current Opening State: { this.props.restaurant.status }</span>
            </div>
        );
    }
}

/**
 * Exposes Redux store properties via props to RestaurantCardComponent
 * @param state {Object}
 * @returns {{favourites: ([]|*)}}
 */
const mapStateToProps = state => ({
    favourites: state.favourites,
    selectedSort: state.selectedSort
});

// Connect component to Redux store
export default connect(mapStateToProps)(RestaurantCardComponent);
