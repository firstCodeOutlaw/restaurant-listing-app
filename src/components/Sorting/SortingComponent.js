import React from 'react';
import { setSelectedSortProperties, sortRestaurants } from "../../store/actions";
import { connect } from 'react-redux';
import { sortUtility } from "../../utils/mergeSort";

/**
 * Allows sorting of restaurant list based on parameters such
 * as best match, newest, rating average, distance, popularity,
 * average product price, delivery cost and minimum cost.
 */
class SortingComponent extends React.Component {
    sortKeys = [
        {id: 1, label: 'Best Match', value: 'bestMatch'},
        {id: 2, label: 'Newest', value: 'newest'},
        {id: 3, label: 'Rating Average', value: 'ratingAverage'},
        {id: 4, label: 'Distance', value: 'distance'},
        {id: 5, label: 'Popularity', value: 'popularity'},
        {id: 6, label: 'Average Product Price', value: 'averageProductPrice'},
        {id: 7, label: 'Delivery Costs', value: 'deliveryCosts'},
        {id: 8, label: 'Minimum Cost', value: 'minCost'}
    ]

    constructor(props) {
        super(props);
        this.handleSortSelectionChange = this.handleSortSelectionChange.bind(this);
        this.state = {
            sortValue: ''
        }
    }

    /**
     * Reacts to changes in selected sort properties by sorting restaurants list
     * and notifying Redux store.
     *
     * @param target
     */
    handleSortSelectionChange({target}) {
        const value = target.value;
        this.setState({sortValue: value});
        const sortLabel = this.sortKeys.find(sortKey => (sortKey.value === value)).label;
        // Dispatch selected sort value and label to store
        this.props.dispatch(setSelectedSortProperties(value, sortLabel));

        if ( value.length ) {
            const { restaurants } = this.props;
            const favouriteRestaurants = this.sortedFavouriteRestaurants();
            // Dispatch restaurants-to-render
            this.props.dispatch(
                sortRestaurants(sortUtility.mergeSort(restaurants, value), favouriteRestaurants)
            );
        }
    }

    /**
     * Sorts favourite restaurants based on a user's selected sort type
     * and a few other sorting rules that apply to favourite restaurants
     *
     * @returns {*[]|*}
     */
    sortedFavouriteRestaurants() {
        return this.props.favourites.length > 1
            ? sortUtility.mergeSort(this.props.favourites, this.state.sortValue)
            : [];
    }

    render() {
        const selectedSortLabelDisplay = this.props.selectedSortLabel.length
            ? <span style={{marginLeft: '.5em'}}>Sorted By: { this.props.selectedSortLabel }</span>
            : '';

        return (
            <form>
                <select value={ this.state.sortValue } onChange={ this.handleSortSelectionChange }>
                    <option disabled value="">Sort by..</option>
                    { this.sortKeys.map((item) =>
                        <option key={ item.id.toString() } value={ item.value }>
                            { item.label }
                        </option>
                    )}
                </select>
                { selectedSortLabelDisplay }
            </form>
        );
    }
}

const mapStateToProps = state => ({
    restaurants: state.restaurants,
    favourites: state.favourites,
    selectedSortLabel: state.selectedSortLabel
});

export default connect(mapStateToProps)(SortingComponent);
