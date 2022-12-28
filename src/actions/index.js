//Send info from element selected to div to show info
export function select(element){
   return{
       type: 'ELEMENT' , payload: {element: element}
   }
}

export function titlefilter(title){
    
    return{
        type: 'FILTER-TITLE' , payload: {title: title}
    }
}