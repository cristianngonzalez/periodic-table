//Importar las actions
import { element , titlefilter } from "../actions/index";

//InitialState contiene las mismas propiedades que el store
const initialState = {
  current_element: false,
  filter: {
      title: 'all',
  }
};

function rootReducer(state = initialState, action) {


   switch(action.type){
      case 'ELEMENT':{
         //Cambiamos las propiedades del stado
         return{
            ...state, current_element: action.payload.element
         }
      }break;
      case 'FILTER-TITLE':{
         //Cambiamos las propiedades del stado
         return{
            ...state, filter:{title: action.payload.title}
         }
      }break;
      default: {
         return state;
      }
   }
}

export default rootReducer;