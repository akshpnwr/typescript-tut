interface RepositoriesState {
    data: string[],
    loading: boolean,
    error: string | null
}

interface Action {
    type: string,
    payload?: any
}

// Define the initial state
const initialState = {
    data: [],
    loading: false,
    error: null
};

// Define the reducer function
const reducer = (state: RepositoriesState = initialState, action: Action): RepositoriesState => {
    switch (action.type) {
        // Add your action types and corresponding state updates here
        case 'search_repositories':
            return  {loading: true, error: null, data: []}
        case 'search_repositories_success':
            return {loading: false, error: null, data: action.payload }        
        case 'search_repositories_error':
            return {loading: false, error: action.payload, data: []}
        default:
            return state;
    }
};

export default reducer;
