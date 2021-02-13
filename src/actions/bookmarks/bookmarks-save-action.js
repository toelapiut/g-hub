export const bookmarkSaveAction = (data) => {
  return {
    type: 'SAVE_REPOSITORY_ATTEMPT',
    payload: {
      data,
    }
  };
};