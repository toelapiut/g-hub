export const bookmarksReducer = (state = {}, action) => {
  const {payload} = action;
  switch (action.type) {
  case 'SAVE_REPOSITORY_ATTEMPT': {
    return Object.assign({}, state, {
      ...state,
      [payload.data.id]: payload.data
    });
  }
  case 'DELETE_REPOSITORY_ATTEMPT': {
    const newState = {...state};
    delete newState[payload.data.id];
    return newState;
  }
  default: {
    return state;
  }
  }
};
