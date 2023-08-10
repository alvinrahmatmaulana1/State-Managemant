import { createStore } from "vuex";
import Auth from './modules/Auth'
import produk from "./modules/produk";
import categori from "./modules/categori";
const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        produk,
        categori,
        Auth
        
    },
});

export default store;