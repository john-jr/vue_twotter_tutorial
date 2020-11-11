import { createStore } from 'vuex'
import { UserModule } from "./User"


// State é onde você cria classes de estado globais
// Mutations é onde você modifica as classes de estado
// Actions é onde são codificadas as ações que o mutation deve realizar 
export default createStore({
  state: {

  },

    //Mutations são funções que afetam o STATE
  mutations: {
   
  },

  // Actions são funções que você chama pela sua aplicação que chama o MUTATIONS
  actions: {

  },

  modules: {
   User: UserModule
  }
})
