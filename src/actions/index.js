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
export function typefilter(type){
    return{
        type: 'FILTER-TYPE' , payload: {type: type}
    }
}
export function statefilter(state){
    return{
        type: 'FILTER-STATE' , payload: {state: state}
    }
}
export function groupfilter(group){
    return{
        type: 'FILTER-GROUP' , payload: {group: group}
    }
}
export function periodfilter(period){
    return{
        type: 'FILTER-PERIOD' , payload: {period: period}
    }
}