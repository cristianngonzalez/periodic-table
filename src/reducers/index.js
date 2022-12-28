//Importar las actions
import { element } from "../actions/index";

//InitialState contiene las mismas propiedades que el store
const initialState = {
  current_element: false
};

function rootReducer(state = initialState, action) {


   switch(action.type){
      case 'ELEMENT':{
         //Cambiamos las propiedades del stado
         return{
            ...state, current_element: action.payload.element
         }
      }break;
      default: {
         return state;
      }
   }
}

export default rootReducer;