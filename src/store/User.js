export const UserModule ={
    namespaced: true,
    state: {
        user: null
    },
  
      //Mutations são funções que afetam o STATE
    mutations: {
      SET_USER(state,user){
        state.user = user;
      }
    },
  
    // Actions são funções que você chama pela sua aplicação que chama o MUTATIONS
    actions: {
      setUser({ commit }, user){
        commit('SET_USER', user);
      }
  
    }
}