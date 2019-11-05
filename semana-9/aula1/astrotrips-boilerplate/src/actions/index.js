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

export const getTrips = () => async dispatch => {
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/thalita/trips`);
        dispatch(setTripsAction(response.data.trips))
};

export const getTripDetail = (id) => async dispatch => {
    const response = await axios.get(
       `https://us-central1-missao-newton.cloudfunctions.net/futureX/thalita/trip/${id}`);
        dispatch(setDetailTripAction(response.data.trip))
};