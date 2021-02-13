export const bookmarkDeleteAction = (data) => {
  return {
    type: 'DELETE_REPOSITORY_ATTEMPT',
    payload: {
      data,
    }
  };
};