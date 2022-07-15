import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './userProfile.css';
import { ProfileContext } from "./ProfileContext";
import { useContext } from "react";
import UpdateData from './UpdateDataU';
import { Link } from 'react-router-dom';
import axios from 'axios';

//update function 

const UpdateDataU = () => {
    const user_id = sessionStorage.getItem('user_id');

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        age: "",
        address: ""
    });

    const SaveInfo = async (e) => {
        e.preventDefault();

        // axios.patch({
        //     // method: "post",
        //     url: `http://127.0.0.1:8000/api/updater/+${user_id}`,
        //     data: user

        // }).then(res => {
        //     console.log(res)
        //     alert('You have been registered successfully');

        // }).catch(error => {
        //     console.log(error.response.data.message);
        // });


        const requestOptions =
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify(
                {
                    name: e.target.name.value,
                    email: e.target.email.value,
                    phone: e.target.phone.value,
                    age: e.target.age.value,
                    address: e.target.address.value

                }
            )
        }
        console.log(requestOptions);

        const response = await fetch(`http://127.0.0.1:8000/api/update/`+user_id,requestOptions);

        if (response.ok) {
            return alert('Data Updated Successfully');
        }

        else {
            return alert('There is something wrong');
        }
    }

    useEffect(() => {
        SaveInfo();
    }
        , []);



    return (

        <section className="section about-section gray-bg" id="about">


            {/* {!isLoggedIn ? (
          <>
            <div>
                you are not logged in
            </div>
           
          </>
        ) : 
        ( */}

            <div style={{ border: '1px solid', padding: '50px' }} className="container">

                <div className="row align-items-center flex-row-reverse ">

                    <div className="col-lg-6 ">

                        <div id='uesrInfo' className="about-text go-to ">

                            {/* form */}

                            <form action='' onSubmit={SaveInfo}>

                                <div className="row about-list">

                                    <div className="col-md-7">
                                        <div className="media">
                                            <label>Name</label>
                                            <input onChange={(e) =>
                                                setUser((prev) => ({ ...prev, name: e.target.value }))}
                                                name='name' type="text" placeholder='your name' required />
                                        </div>
                                        <br></br>

                                        <div className="media">
                                            <label>Age</label>

                                            <input onChange={(e) =>
                                                setUser((prev) => ({ ...prev, age: e.target.value }))} name='age' placeholder='your age' type="text" required />
                                        </div>
                                        <br></br>

                                        <div className="media">
                                            <label>Residence</label>

                                            <input onChange={(e) =>
                                                setUser((prev) => ({ ...prev, address: e.target.value }))} placeholder='Ex:Amman-jordan' name='address' type="text" required />
                                        </div>
                                        <br></br>

                                    </div>

                                    <div className="col-md-7">
                                        <div className="media">
                                            <label>E-mail</label>

                                            <input
                                                onChange={(e) =>
                                                    setUser((prev) =>
                                                        ({ ...prev, email: e.target.value }))} placeholder='Ex:Ahmad@mail.com' name='email' type="text"
                                                required
                                            />

                                        </div> <br></br>
                                        <div className="media">
                                            <label>Phone</label>

                                            <input onChange={(e) =>
                                                setUser((prev) => ({ ...prev, phone: e.target.value }))} placeholder='Ex:+962777777777' name='phone'
                                                type="text" required />
                                        </div>
                                    </div>
                                </div>
                                <br></br><br></br>

                                <input id='input7Save' type="submit" className="btn btn-warning click" value={'Save'} required />
                            </form>
                            
                             {/*end form */}

                        </div>



                    </div>

                    <div className="col-lg-6">
                        <div className="d-flex flex-column align-items-center text-center about-avatar">
                            <img style={{ width: '200px' }}

                                src={"https://pinonon.com/wp/wp-content/uploads/2016/06/c73e868161010a36daad4c089694e3a4-260x300.jpg"} /> <br></br>

                            <Link type="button" to="/back">

                                <button className="btn btn-dark" type="button">
                                    Back
                                </button>


                            </Link>

                            {/* <input onClick={SaveInfo} id='input7Save' type="button" style={{display:'none'}}  className="btn btn-warning"  value={'Save'} /><br></br> */}
                            {/* <input onClick={Mybookings} id='input8Show' type="button" className="btn btn-dark click" value={'My bookings'} />

                            <input onClick={Info} id='info' type="button" style={{ display: 'none' }} className="btn btn-warning click" value={'My info'} /> */}

                        </div>

                    </div>



                </div>
                <br></br>


            </div>
            <br></br>
            {/* )} */}
        </section>


    )

}
export default UpdateDataU;
