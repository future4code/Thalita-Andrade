
const initialState =  {
    trips: [],
    tripDetail: {},
}

export const trips = (state = initialState, action) => {
    switch (action.type) {

        case 'DEFINIR_LISTA_VIAGENS':

            return { ...state, trips: action.payload.trips };

        case 'DEFINIR_DETALHE_VIAGEM':

            return { ...state, tripDetail: action.payload.trip };

        default: 
            return state;
    }
}

export default trips;