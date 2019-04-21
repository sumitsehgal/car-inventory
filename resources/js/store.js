import Axios from "axios";

export default {
    state: {
        welcomeMessage: 'Welcome to Car Inventory',
        manufacturers: [],
        models: [],
    },
    mutations: {
        updateManufacturers(state, payload) {
            state.manufacturers = payload
        },
        updateModels(state, payload) {
            state.models = payload
        }
    },
    getters: {
        welcome(state) {
            return state.welcomeMessage;
        },
        manufacturers(state) {
            return state.manufacturers
        },
        models(state) {
            return state.models
        }
    },
    actions: {
        getManufacturers(context){
            Axios.get('/api/manufacturers')
                .then(response => {
                    context.commit('updateManufacturers', response.data.manufacturers);
                });
        },
        getModels(context){
            Axios.get('/api/models')
                .then(response => {
                    context.commit('updateModels', response.data.models);
                });
        }
    }
}