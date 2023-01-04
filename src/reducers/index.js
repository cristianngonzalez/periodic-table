//Importar las actions
import { Steam } from "react-bootstrap-icons";
import { element , titlefilter } from "../actions/index";

import data from '../data.json';

//InitialState contiene las mismas propiedades que el store
const initialState = {
  current_element: false,
  filter: {
      title: 'all',
      type: false,
      group: false,
      period: false,
      state: false, 
  },
  types: data[0].types
};

function rootReducer(state = initialState, action) {


   switch(action.type){
      case 'ELEMENT':{
         return{
            ...state, current_element: action.payload.element
         }
      }break;
      case 'FILTER-TITLE':{
         //If is diferent to current state
         return{
            ...state, filter:{
               ...state.filter, 
               title: action.payload.title, 
               type: false, 
               group: false,
               period: false,
               state: false
            }
         }
         
      }break;
      case 'FILTER-TYPE':{
         return{
            ...state, filter:{
               title: state.filter.title,
               type: action.payload.type, 
               group: false,
               period: false,
               state: false,
            }
         }
      }break;
      case 'FILTER-STATE':{
         return{
            ...state, filter:{
               ...state.filter, 
               state: action.payload.state,
               type: false,
               period: false,
               group: false
            }
         }
      }break;
      case 'FILTER-GROUP':{
         return{
            ...state, filter:{
               ...state.filter, 
               group: action.payload.group,
               type: false,
               period: false,
               state: false
            }
         }
      }break;
      case 'FILTER-PERIOD':{
         return{
            ...state, filter:{
               ...state.filter, 
               period: action.payload.period,
               type: false,
               group: false,
               state: false
            }
         }
      }break;
      default: {
         return state;
      }
   }
}

export default rootReducer;