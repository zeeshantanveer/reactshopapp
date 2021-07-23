import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createReduxContact} from "../actions/ContactActions";
import shortid from "shortid";
import {useHistory} from "react-router-dom";
const AddContact = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const createContact = (e) => {
        e.preventDefault();
        dispatch(createReduxContact({
            id : shortid.generate(),
            name : name,
            phone : phone,
            email : email
        }));
        history.push('/');
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => createContact(e)}>
                    <div className='form-group py-2'>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className='form-group py-2'>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" placeholder="Enter your phone number" />
                    </div>
                    <div className='form-group py-2'>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Enter your email" />
                    </div>
                    <button type="submit" className="btn btn-primary py-2">Create Contact</button>
                </form>
            </div>
        </div>
    );
};

export default AddContact;
