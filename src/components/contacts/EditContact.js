import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getContact,updateContact} from "../actions/ContactActions";
// eslint-disable-next-line no-unused-vars
import shortid from "shortid";
import {useHistory, useParams} from "react-router-dom";
const EditContact = () => {
    let {id} = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector(state => state.contact.contact);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (contact != null){
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
        }
        dispatch(getContact(id));
    },[contact]);

    const onUpdateContact = (e) => {
        e.preventDefault();
        const update_contact = Object.assign(contact, {
            name:name,
            email:email,
            phone:phone,
        });
        dispatch(updateContact(update_contact));
        history.push('/');
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Edit a Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => onUpdateContact(e)}>
                    <div className='form-group py-2'>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className='form-group py-2'>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" placeholder="Enter your phone number" />
                    </div>
                    <div className='form-group py-2'>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Enter your email" />
                    </div>
                    <button type="submit" className="btn btn-primary py-2">Update Contact</button>
                </form>
            </div>
        </div>
    );
};

export default EditContact;
