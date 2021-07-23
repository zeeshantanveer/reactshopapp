import {
    CLEAR_CONTACT,
    CREATE_CONTACT, DELETE_ALL_CONTACT,
    DELETE_CONTACT, DELETE_SELECTED_CONTACT,
    GET_CONTACT,
    SELECT_CONTACT,
    UPDATE_CONTACT
} from '../../constants/constants';
//Action Create Contact
export const createReduxContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact,
});

//Action GET Contact
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id,
});
//Action UPDATE Contact
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
});

//Action DELETE Contact
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id,
});
//Action SELECT ALL Contact
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload: id,
});
//Action Clear ALL Contact
export const clearAllContact = () => ({
    type: CLEAR_CONTACT,
});
//Action Clear ALL Contact
export const deleteAllContact = () => ({
    type: DELETE_SELECTED_CONTACT,
});
