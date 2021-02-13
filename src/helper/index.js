
import t from 'typy';


export const errorStyles = (error) => {
  if (!t(error).isNullOrUndefined) {
    return {
      borderColor: '#ED4337',
      color: '#ED4337'
    };
  }
  return {};
};