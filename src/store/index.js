import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    products: [],
    categories: []
  },
  getters: {
    getProducts: (state) => state.products,
    getCategories: (state) => state.categories,
    getProductById: (state) => (productId) => {
      console.log("Fetching single product by ID:", productId);
      console.log("ProductData:", state.products);
      const product = state.products.find((p) => p.id == productId);
      console.log("Product:", product);
      return product;
    },
  },
  actions: {
    async fetchProduct({ commit }) {
      try {
        const dataProduct = await axios.get("https://fakestoreapi.com/products")
        commit('SET_PRODUCTS', dataProduct.data)
      } catch (error) {
        alert('Ada Error')
        console.log(error)
      }
    },
    async fetchSingleProduct({ commit }, productId) {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        commit("SET_SINGLE_PRODUCT", response.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async fetchCategories({ commit }) {
      try {
        const dataCategories = await axios.get("https://fakestoreapi.com/products/categories")
        commit("SET_CATEGORIES", dataCategories.data)
      } catch (error) {
        alert("Ada Eror")
        console.log(error)
      }
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_SINGLE_PRODUCT(state, product) {
      state.singleProduct = product;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    }
  }
})