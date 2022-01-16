import axios from "axios"
import { FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserActionType"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserError = (error) => {
    return {
        type: FETCH_USER_ERROR,
        error: error
    }
}

export const requestUser = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                let data = response.data.map(u => u.title)
                dispatch(fetchUserSuccess(data))
            })
            .catch(function (error) {
                dispatch(fetchUserError(error.message))
            })
    }
}