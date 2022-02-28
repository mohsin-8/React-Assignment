import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import { FcContacts } from 'react-icons/fc';

import { db } from '../firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

const ContactForm = () => {
    const [users, setUsers] = useState([]);
    const [newUsersName, setNewUsersName] = useState("");
    const [newUsersAge, setNewUsersAge] = useState(0);
    const [newUsersEmails, setNewUsersEmails] = useState("");
    const [newUsersContactNumber, setNewUsersContactNumber] = useState(0);

    const usersCollectionReferrence = collection(db, "users");

    const onSubmit = async () => {
        // console.log('form submit');
        await addDoc(usersCollectionReferrence, {
            fullName: newUsersName,
            userAge: newUsersAge,
            userEmail: newUsersEmails,
            userContact: newUsersContactNumber,
        });
    }

    const updateUser = async (id, fullName, userAge, userEmail, userContact) => {
        const userDoc = doc(db, "users", id);
        const newUpdate = {
            fullName: prompt('Update User Full Name: ', fullName),
            userAge: prompt('Update User Age: ', userAge),
            userEmail: prompt('Update User Email: ', userEmail),
            userContact: prompt('Update User Contact Number: ', userContact),
        }
        await updateDoc(userDoc, newUpdate);
    }

    const deleteUser = async (id) => {
        // console.log(id);
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionReferrence);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(data);
        };
        getUsers();
    }, []);

    return (
        <>
            <div className="container my-5">
                <div className="bg_dark card p-5">
                    <h3 className='text-center'>USERS FORMS <span><FcContacts /></span></h3>
                    <div className="fullName py-4">
                        <label className='form-label'>Enter Full Name: </label>
                        <input
                            type="text"
                            name='fullName'
                            className='form-control'
                            onChange={(e) => setNewUsersName(e.target.value)}
                        />
                    </div>

                    <div className="age py-4">
                        <label className='form-label'>Enter Age: </label>
                        <input
                            type="number"
                            name='age'
                            className='form-control'
                            onChange={(e) => setNewUsersAge(e.target.value)}
                        />
                    </div>

                    <div className="email py-4">
                        <label className='form-label'>Enter Email Address: </label>
                        <input
                            type="email"
                            name='email'
                            className='form-control'
                            onChange={(e) => setNewUsersEmails(e.target.value)}
                        />
                    </div>

                    <div className="contactNum py-4">
                        <label className='form-label'>Enter Contact Number:</label>
                        <input
                            type="number"
                            name='contact'
                            className='form-control'
                            onChange={(e) => setNewUsersContactNumber(e.target.value)}
                        />
                    </div>

                    <button className='btn btn-info' onClick={onSubmit}>Submit</button>
                </div>

                {/* <Link
                    to="/users"
                    className='btn btn-success my-3 w-100'
                >Check Users</Link> */}

                <hr />
                <h2>USER INFORMATIONS</h2>

                {
                    users.map((value, index) => {
                        return (
                            <div key={index}>
                                <div className='container my-4'>
                                    <div className='info'>
                                        <span className='bold'>User Full Name:</span> {value.fullName} <br />
                                        <span className='bold'>User Age:</span> {value.userAge} <br />
                                        <span className='bold'>User Email Address:</span> {value.userEmail} <br />
                                        <span className='bold'>User Contact Number:</span> {value.userContact} <br />

                                        <button className='btn btn-success mt-3' onClick={() => { updateUser(value.id, value.fullName, value.userAge, value.userEmail, value.userContact) }}>Update User Data</button>
                                        <button className='btn btn-danger mt-3 ms-3' onClick={() => { deleteUser(value.id) }}>Delete User Data</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default ContactForm;