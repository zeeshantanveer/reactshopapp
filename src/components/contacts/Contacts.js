import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Contact from "./Contact";
import {clearAllContact, selectAllContact,deleteAllContact} from "../actions/ContactActions";
import Jumbotron from "../alements/Jumbotron";

const Contacts = () => {
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState(false);
    const contacts = useSelector(state => state.contact.contacts);
    const selectedContacts = useSelector(state => state.contact.selectedContact);
    useEffect(() => {
        if (selectAll){
            dispatch(selectAllContact(contacts.map(contact => contact.id)));
        }else{
            dispatch(clearAllContact());
        }
    },[selectAll]);
    return (
        <div>
            {
                selectedContacts.length >0 ? (
                    <button className="btn btn-danger mb-3" onClick={() => dispatch(deleteAllContact())}>Delete All</button>
                ) : null
            }
            <Jumbotron page="Contacts" icon="contacts" />
            <div className="container pt-5">
                <table className="table shadow table-striped">
                    <thead className="bg-danger text-white">
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" id="selectAll" className="custom-control-input" value={selectAll} onChange={() => !setSelectAll(!selectAll)}/>
                                <label htmlFor="selectAll" className="custom-control-label"></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        contacts.map(contact => (
                            <Contact contact={contact} selectAll={selectAll} key={contact.id} />
                        ))
                    }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Contacts;
