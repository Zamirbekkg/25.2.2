const ADD_CAR = 'ADD_CAR';
const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM';
const RESET_NUM = 'RESET_NUM';
const PLUS_NUM = 'PLUS_NUM';
const MINUS_NUM = 'MINUS_NUM';

const initState = {
    num: 0,
    cars:[
        {
            model: "BMW",
            year: 2017
        },
        {
            model: "Honda",
            year: 2015
        },
        {
            model: "Audi",
            year: 2010
        },
        {
            model: "Toyota",
            year: 2020
        },
        {
            model: "Mercedes",
            year: 2016
        }
    ]
}


export default (state = initState, action) => {
    console.log('Current state:', state);
    console.log('Dispatching action:', action);
    
    switch (action.type) {
        case ADD_CAR:{
            return {
                ...state,
                cars: [
                    action.car,
                    ...state.cars
                ]
            }
        }

        case INCREMENT_NUM :{
            return{
                ...state,
                num: state.num + 1
            }
        }
        case DECREMENT_NUM :{
            return{
                ...state,
                num: state.num - 1
            }
        }
        case RESET_NUM:{
            return{
                ...state,
                num: 0
            }
        }

        case PLUS_NUM :{
            return{
                ...state,
                num: state.num + 5
            }
        }

        case MINUS_NUM :{
            return{
                ...state,
                num: state.num - 5
            }
        }

        default: return state
    }
};


export const addCar = (car) =>{
    return (dispatch) =>{
        dispatch({type: ADD_CAR, car})
    }
};

export const incrementNum = () =>{
    return (dispatch) =>{
        dispatch({type: INCREMENT_NUM})
    }
};

export const decrementNum = () =>{
    return (dispatch) =>{
        dispatch({type: DECREMENT_NUM})
    }
}

export const resetNum = () =>{
    return (dispatch) =>{
        dispatch({type: RESET_NUM})
    }
}



export const plusNum = () =>{
    return (dispatch) =>{
        dispatch({type: PLUS_NUM})
    }
};

export const minusNum = () =>{
    return (dispatch) =>{
        dispatch({type: MINUS_NUM})
    }
}