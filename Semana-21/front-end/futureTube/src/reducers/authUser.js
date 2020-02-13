const initialState = {
  user: undefined
};

const authUser = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {message: 'login request'};
    case 'LOGIN_SUCCESS':
      return {message: 'login sucesso'};
    case 'LOGIN_FAILURE':
      return {message: 'login failure'};
    default:
      return state;
  }
};

export default authUser;