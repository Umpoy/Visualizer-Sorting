export const selectAlgorithms = algorithm => {
    return {
        type: 'ALGORITHM_SELECTED',
        payload: algorithm
    };
};