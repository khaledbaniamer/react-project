import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './userProfile.css';
import { ProfileContext } from "./ProfileContext";
import { useContext } from "react";
import UpdateData from './UpdateDataU';
import useFetch from '../hooks/useFetch';


const Mybookings = () => {
    //API 
    document.getElementById('bookings').style.display = 'block';
    document.getElementById('input8Show').style.display = 'none';
    document.getElementById('info').style.display = 'block';
    document.getElementById('uesrInfo').style.display = 'none';
    document.getElementById('input6').style.display = 'none';
    document.getElementById('input7Save').style.display = 'none';
}



const UserProfile = () => {

    let i = 1;


    const user_id = sessionStorage.getItem('user_id');

    //view user info
    const [data, setData] = useState({});



    const fetchProfile = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/users/' + user_id)
        const myProfile = await response.json();

        setData(myProfile);
        console.log(myProfile)

    }



    useEffect(() => {
        fetchProfile();
    }
        , []);
    //view user bookings

    const [bookingData, getFetch] = useFetch("http://127.0.0.1:8000/api/books/" + user_id);
    useEffect(() => {
        getFetch()
    }


        , []);


    const userBookings = bookingData.map((book) => {
        return (                   
            <tr>               
                <td>{book.id}</td>
                <td>{book.checkIn}</td>
                <td>{book.checkOut}</td>
                <td>{book.total_price}</td>

            </tr>
        )
    }
    )

    return (


        <section className="section about-section gray-bg" id="about">


            <div style={{ border: '1px solid', padding: '50px' }} className="container">

                <div className="row align-items-center flex-row-reverse ">

                    <div className="col-lg-6 ">

                        <div id='uesrInfo' className="about-text go-to ">
                            <form action='' method='post'>
                                <div className="row about-list">

                                    <div className="col-md-7">
                                        <div className="media">
                                            <label>Name</label>
                                            <input
                                                id='name' type="text" value={data.name} disabled />
                                        </div> <br></br>
                                        <div className="media">
                                            <label>Age</label>
                                            <input id='age' type="text" value={data.age} disabled />
                                        </div>
                                        <br></br>
                                        <div className="media">
                                            <label>Residence</label>

                                            <input id='address' type="text" value={data.address} disabled />
                                        </div> <br></br>

                                    </div>
                                    <div className="col-md-7">
                                        <div className="media">
                                            <label>E-mail</label>
                                            <input id='email' type="text" value={data.email} disabled />

                                        </div> <br></br>
                                        <div className="media">
                                            <label>Phone</label>
                                            <input id='phone' type="text" value={data.phone} disabled />

                                        </div>
                                    </div>


                                </div>
                            </form>
                        </div>
                        <br></br><br></br>

                        <div id='bookings' style={{ border: '1px solid', display: 'none' }} className="counter">
                            <div className="row">
                                {/* Bookings*/}
                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to="500" data-speed="500">Bookings</h6>

                                    <table className="table mt-2">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>checkIn</th>
                                                <th>checkOut</th>
                                                <th>total price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userBookings}

                                        </tbody>
                                    </table>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="d-flex flex-column align-items-center text-center about-avatar">
                            <img style={{ width: '200px' }}

                                src={"https://pinonon.com/wp/wp-content/uploads/2016/06/c73e868161010a36daad4c089694e3a4-260x300.jpg"} /> <br></br>

                            <Link type="button" to="/edit">

                                <button className="btn btn-warning" type="button">
                                    Edit profile
                                </button>

                            </Link> <br></br>

                            <input onClick={Mybookings} id='input8Show' type="button" className="btn btn-dark click" value={'My bookings'} />


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

export default UserProfile;
