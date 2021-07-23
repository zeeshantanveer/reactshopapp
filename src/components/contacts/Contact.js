import React from 'react';
import Avatar from "react-avatar";
import {Link} from "react-router-dom";
import {deleteContact} from "../actions/ContactActions";
import {useDispatch} from "react-redux";
const Contact = ({contact, selectAll}) => {
    const dispatch = useDispatch();
    const {id,name, phone, email} = contact;
    return (
        <tr>
            <td scope="col">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" readOnly checked={selectAll} />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td><Avatar className="me-2" name={name} size="45" round={true} />{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions me-2">
                <Link to={`/contacts/edit/${id}`}><span className="material-icons">edit</span></Link>
                <Link to="" onClick={() => dispatch(deleteContact(id))}><span className="material-icons text-danger">remove_circle</span></Link>
            </td>
        </tr>
    );
};

export default Contact;
