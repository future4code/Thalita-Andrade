
const initialState =  {
    trips: [],
    tripDetail: {},
    createTrip: [],
    subscriptionTrip: []
}

export const trips = (state = initialState, action) => {
    switch (action.type) {

        case 'DEFINIR_LISTA_VIAGENS':

            return { ...state, trips: action.payload.trips };

        case 'DEFINIR_DETALHE_VIAGEM':

            return { ...state, tripDetail: action.payload.trip };

    
        case 'CRIAR_VIAGEM':

            return { ...state, createTrip: action.payload.trip };


        case 'INSCRICAO_VIAGEM':

            return { ...state, subscriptionTrip: action.payload.trip };

        default: 
            return state;
    }
}

export default trips;