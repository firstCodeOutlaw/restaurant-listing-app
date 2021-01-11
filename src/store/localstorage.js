/**
 * Loads application state from Local Storage. Only favourite
 * restaurants data is persisted.
 *
 * @returns {any|undefined}
 */
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (!serializedState) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        // If something goes wrong, we return undefined so that
        // the app doesn't crash. With undefined, Redux
        // initializes a fresh state
        console.log('Error loading state from local storage...');
        return undefined;
    }
};

/**
 * Saves application state to Local Storage
 *
 * @param state
 */
export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        // We'll ignore this for now, although errors should
        // be logged somewhere e.g. to an error monitoring
        // application such as Sentry or Bugsnag
        console.error(error);
    }
};
