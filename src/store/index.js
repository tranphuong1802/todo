import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    tableData: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
  },

  mutations: {
    SET_ALL_DATA: (state,data)=>{
      state.tableData = data
  },
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
    getAllUser({commit}){
      const data = [
        {
          stt: 1,
          cd: "1",
          name: "Tom",
          dv: "No. 189, Grove St, Los Angeles",
        },
        {
          stt: 2,
          cd: "2",
          name: "Tom",
          dv: "No. 189, Grove St, Los Angeles",
        },
        {
          stt: 3,
          cd: "3",
          name: "Tom",
          dv: "No. 189, Grove St, Los Angeles",
        },
        {
          stt: 4,
          cd: "4",
          name: "Tom",
          dv: "No. 189, Grove St, Los Angeles",
        },
      ];
      if (!localStorage.getItem("items")) {
        const parsed = JSON.stringify(data);
        localStorage.setItem("items", parsed);
        commit("SET_ALL_DATA",data)
      }
    },
    delete1({ commit }, item) {
      commit('delete', item)
    },
    // addItem({ commit }, item){
    //   commit('add',item)
    // }
    
  }
})