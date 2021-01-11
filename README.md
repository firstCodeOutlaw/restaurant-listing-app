## Installation
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses Yarn as dependency manager. 
Use the command below to clone the project:

`git clone https://github.com/schplunker/restaurant-listing-app`

### Install Yarn

Follow [this guide](https://classic.yarnpkg.com/en/docs/install) to install Yarn on your machine.

### Install Dependencies
Change directory to your project folder and install dependencies:
`yarn install`

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Other commands you can run in the project directory includes:

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Specifications

This app was made based on specifications provided in an interview question. I'll share the specifications here:

> Implement a sample project, where you visualize a
restaurant list. You are able to sort the restaurant list based on its current openings state,
you can favourite a restaurant and you can select a sort value to further sort the list. Finally,
we would like to see you add the option to filter the restaurant list, based on a restaurant’s
name. In the attachments you can find a JSON file (sample.json), this file contains all the
necessary data to complete this assignment. Parse the JSON file and use it for the
visualization and sorting of the list. Use the following priority of the sorting (from the
highest to the lowest priority):
>
> 1. **Favourites**: Favourite restaurants are at the top of the list, your current favourite
   restaurants are stored locally on the phone.
> 2. **Openings state**: Restaurant is either open (top), you can order ahead (middle) or a
   restaurant is currently closed (bottom). (Values available in sample.json)
> 3. **Sort options**: Always one sort option is chosen and this can be best match, newest,
   rating average, distance, popularity, average product price, delivery costs or the
   minimum cost. (Values available in sample.json)
> 4. **Filtering**: It’s up to you on how you want to search by restaurant name.
> - Please visualize the name of the restaurants, the current opening state, the selected
  sort, the sort value for a restaurant and if it’s a favourite or not.
> - Remember if you have multiple favourite restaurants, they are also sorted based on
  their current openings state and current selected sort.
> - We expect valid test cases
> - Readme file with all the needed information, how to get the sample project working
  and verify the test cases.

## License

MIT
