import axios from "axios";

const setTripsAction = (trips) => {
    return {
        type: "DEFINIR_LISTA_VIAGENS",
        payload: {
        trips: trips,
        }
    };
};

const setDetailTripAction = (trip, id) => {
    return {
        type: "DEFINIR_DETALHE_VIAGEM",
        payload: {
        trip: trip,
        id: id,
        }
    };
};

const setCreateTrip = (trip) => {
    return {
        type: "CRIAR_VIAGEM",
        payload: {
            trip: trip,
        }
    }
}

const setApplyToTrip = (trip) => {
    return {
        type: "INSCRICAO_VIAGEM",
        payload: {
            trip: trip,   
        }
    }
}


export const getTrips = () => async dispatch => {
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/thalita/trips`);
        dispatch(setTripsAction(response.data.trips))
};

export const getTripDetail = (id) => async dispatch => {
    const token = window.localStorage.getItem("token")
    const response = await axios.get(
       `https://us-central1-missao-newton.cloudfunctions.net/futureX/thalita/trip/${id}`, {
           headers: { auth: token}
       });
        dispatch(setDetailTripAction(response.data.trip))
};

export const postCreateTrip = () => async dispatch => {
    const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/thalita/trips`);
        dispatch(setCreateTrip(response.data.trip))
}

export const postApplyToTrip = (id) => async dispatch => {
    const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/thalita/trips/${id}/apply`);
        dispatch(setApplyToTrip(response.data.trip))
}