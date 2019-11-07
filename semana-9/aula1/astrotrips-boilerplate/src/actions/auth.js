import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

export const login = (email, password) => async dispatch => {
    console.log("oi")
    try {
        const response = await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/futureX/thalita/login",
            {
                email,
                password
            }
        );
        console.log("Resposta: ", response);
        window.localStorage.setItem('token', response.data.token);
        dispatch(push(routes.adminPage));
    }   catch(e) {
        console.log(e.message)
    }  
};