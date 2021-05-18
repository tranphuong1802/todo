import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    tableData: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
  },

  mutations: {
    delete(state, item) {
      let newData = state.tableData.filter(it => it.stt !== item.stt)
      localStorage.setItem("items", JSON.stringify(newData))
      state.tableData = newData;
    },

    // add: (state, item) => {
    //   item.stt = state.tableData.length +1  
    //   state.tableData.push(item)

    // }
  },

  actions: {
    delete1({ commit }, item) {
      commit('delete', item)
    },
    // addItem({ commit }, item){
    //   commit('add',item)
    // }
    
  }
})