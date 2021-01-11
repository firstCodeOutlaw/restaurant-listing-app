import React from 'react';
import { connect } from 'react-redux';
import { filterRestaurants, restoreRestaurantsToRender } from "../../store/actions";

/**
 * Filters restaurant list based on the string provided.
 * Only restaurants with similar names are rendered.
 */
class FilterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormValueChange = this.handleFormValueChange.bind(this);
        this.state = { value: '' };
    }

    handleFormSubmit(event) {
        event.preventDefault();
    }

    /**
     * Reacts to change in filter input value by filtering restaurants list
     * and calling necessary actions to update restaurants to render
     * in Redux store
     * @param event
     */
    handleFormValueChange(event) {
        const { value } = event.target;
        this.setState({value: value});

        if (value.length < 1) {
            this.props.dispatch(restoreRestaurantsToRender());
        } else {
            // Get only restaurants that match filter
            const restaurants = this.props.restaurants.filter(({name}) => {
                    const pattern = new RegExp(value.toLowerCase())
                    return pattern.test(name.toLowerCase()) === true;
                });
            // Call FILTERED_RESTAURANTS action to update restaurantsToRender in Redux store
            this.props.dispatch(filterRestaurants(restaurants));
        }
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    onSubmit={ this.handleFormSubmit }
                    onChange={ this.handleFormValueChange }
                    value={ this.state.value }
                    placeholder="Filter restaurants..."
                />
            </form>
        );
    }
}

/**
 * Exposes Redux store properties via props to FilterComponent
 * @param state {Object}
 * @returns {{restaurant: ([]|*)}}
 */
const mapStateToProps = state => ({
    restaurants: state.restaurants
});

export default connect(mapStateToProps)(FilterComponent);
