export const request = (user) => ({
    type: 'LOGIN_REQUEST',
    payload: {
        user
    }
})

export const success = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: {
        user
    }
})

export const failure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: {
        error
    }
})

export const login = (email, password) => dispatch => {
    try {
      

    } catch (e) {

    }
}
