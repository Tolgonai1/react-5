const defaultState = {
    counter: 0
}

export const counterReducer = (state=defaultState,action)=>{
    switch (action.type){
        case 'iNCREMENT':
            return {...state,counter: state.counter +1}
        default:
            return state
    }
}

export const increaseCounter = ()=> ({type: 'iNCREMENT'})