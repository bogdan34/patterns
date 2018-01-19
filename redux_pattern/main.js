import { createStore } from 'redux'

const initioalState = {
    name: 'Paul',
    lastName: 'Petrov'
};

function reducer(state = initioalState, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {...state, name: changeName.payload}
        case 'CHANGE_LAST_NAME':
            return {...state, lastName: changeLastName.payload}
    }
    return state;
}

const store = createStore(reducer);

console.log(store.getState());

const changeName = {
    type: 'CHANGE_NAME',
    payload: 'John'
};

const changeLastName = {
    type: 'CHANGE_LAST_NAME',
    payload: 'Genry'
};

store.dispatch(changeName);

console.log(store.getState());

store.dispatch(changeLastName);

console.log(store.getState());