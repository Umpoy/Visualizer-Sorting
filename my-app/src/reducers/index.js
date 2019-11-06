import { combineReducers } from 'redux';

const algorithmReducer = () => {
    return [
        { name: 'bubble' },
        { name: 'quick' }
    ];
};

const selectedAlgorithmReducer = (selectedAlgorithm = null, action) => {
    if (action.type === 'ALGORITHM_SELECTED') {
        return action.payload;
    }
    return selectedAlgorithm;
};

export default combineReducers({
    algorithm: algorithmReducer,
    selectedAlgorithm: selectedPokemonReducer
});