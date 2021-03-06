const NoReactReduxReducer = (state, action) => {
    switch (action.type) {
        case 'ACTION_WITHOUT_REACT_REDUX':
            return {
                type: action.type,
                payload: {
                    storeInitiate: action.data
                }
            }
            break;
        default:
            return { state }
            break;
    }
}

export default NoReactReduxReducer;