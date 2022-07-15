import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { userContext } from "../App";


const ViewRoom = () => {
  const { id } = useParams();
 

  const [comment, getCommentFetch] = useFetch("http://127.0.0.1:8000/api/apicomment/"+id);
  useEffect(() => {
    getCommentFetch();
  }, []);
  const [update , setUpdated] = useState(false);
  const [com, setCom] = useState({
    subject: "",
    room_id_comment: id,
    user_id_comment: sessionStorage.getItem("user_id"),
  });
  const handleComment = (e) => {
    setCom({
      [e.target.name]: e.target.value,
    });
  };
    const saveComment = async (e) => {

      e.preventDefault();

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: e.target.subject.value,
          room_id_comment: id,
          user_id_comment: sessionStorage.getItem("user_id"),
        }),
      };
    const response = await fetch("http://127.0.0.1:8000/api/addComment",requestOptions);




      if (response.ok) {
        alert("comment added Successfully");
      } else {
        alert("There is something wrong");
      }
    };

  ///////////end comment///////////
  const {userData , setUserData } = useContext(userContext)
  const user_id = userData.id ;

  // const user_id = JSON.parse(localStorage.getItem('user')).id;


  const [data, getFetch] = useFetch(
    "http://127.0.0.1:8000/api/getsingle/" + id
  );
  useEffect(() => {
    getFetch();
  }, []);

  const [book, setBook] = useState({
    dataIn: "",
    dataOut: "",
    room_id: id,
    user_id:sessionStorage.getItem('user_id'),
    total_price: "",
  });

  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24)) * data.room_price;
  }

  const handleBooking = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const saveData = async (e) => {
    const date1 = new Date(book.dataIn);
    const date2 = new Date(book.dataOut);
    console.log(getDifferenceInDays(date1, date2));
    const price = getDifferenceInDays(date1, date2);

    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dataIn: e.target.dataIn.value,
        dataOut: e.target.dataOut.value,
        room_id: e.target.room_id.value,
        total_price:price,
        user_id:sessionStorage.getItem('user_id'),
      }),
    };
    console.log(requestOptions);

    const response = await fetch(
      "http://127.0.0.1:8000/api/addbook",
      requestOptions
    );

    if (response.ok) {
      alert("We will review your booking and contact you,Thanks");
      // window.location.href = "http://localhost:3000/";
    } else {
      alert("There is something wrong");
      // window.location.href = "http://localhost:3000/";
    }
  };
  const user_id_session = sessionStorage.getItem('user_id')
  return (
    <>
      {/* //// */}
      <section className="banner_area">
        <div className="booking_table d_flex align-items-center">
          <div
            className="overlay bg-parallax"
            data-stellar-ratio="0.9"
            data-stellar-vertical-offset="0"
            data-background=""
          ></div>
          <div
            className="container"
            style={{ marginTop: "15%", marginBottom: "10%" }}
          >
            <div className="banner_content text-center">
              <h2>Relax Your Mind</h2>
              <p>
                If you are looking at blank cassettes on the web, you may be
                very confused at the
                <br /> difference in price. You may see some for as low as $.17
                each.
              </p>
              <a href="/" className="btn theme_btn button_hover">
                Home
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* form */}
      <div id="booking" className="section">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-md-push-5">
                <div className="booking-cta">
                  <p
                    style={{
                      marginBottom: "10%",
                      color: "black",
                      fontWeight: "bolder",
                      fontSize: "430%",
                    }}
                  >
                    Book your Room
                  </p>
                  <div className="">
                    <img
                      src={"../assets/image/" + data.room_image}
                      alt="room-image"
                      className="img-fluid"
                      style={{ width: "85%", height: "430px" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-md-5 col-md-pull-7"
                style={{ marginTop: "7%", marginBottom: "10%" }}
              >
                <div className="booking-form">
                  <div className="form-group">
                    <h2 style={{ color: "black" }}> {data.room_name}</h2>

                    <p>
                      <span
                        style={{
                          color: "black",
                          fontWeight: "bolder",
                          fontSize: "130%",
                        }}
                      >
                        {" "}
                        Room size:
                      </span>{" "}
                      {data.room_size}
                      <br />
                      {data.room_description}
                      <br />{" "}
                      <span
                        style={{
                          color: "black",
                          fontWeight: "bolder",
                          fontSize: "130%",
                        }}
                      >
                        Price:{" "}
                      </span>
                      {data.room_price}JD/night.
                      <br />
                      <span
                        style={{
                          color: "black",
                          fontWeight: "bolder",
                          fontSize: "130%",
                        }}
                      >
                        {" "}
                        Facilities:
                      </span>{" "}
                      {data.room_facilities}
                    </p>
                  </div>

                  {/* boooking */}

                  <form onSubmit={saveData}>
                    <input
                      type="hidden"
                      name="room_id"
                      onChange={handleBooking}
                      value={book.room_id}
                    />
                    <input
                      type="hidden"
                      name="total_price"
                      onChange={handleBooking}
                      value={book.total_price}
                    />
                    <input
                      type="hidden"
                      name="user_id"
                      onChange={handleBooking}
                    />
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Check In</span>
                          <input
                            className="form-control"
                            type="date"
                            required
                            name="dataIn"
                            onChange={handleBooking}
                            value={book.dataIn}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Check out</span>
                          <input
                            className="form-control"
                            type="date"
                            name="dataOut"
                            onChange={handleBooking}
                            value={book.dataOut}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-btn">
                      { user_id_session == null ?(
                        <>
                        <br/>
                          <h4 >PLease click here to<Link to='/login' style={{color:"#f3c300"}} > Login</Link> </h4> 
                        </>
                      ):(
                        <>
                      <button className="book_now_btn button_hover">
                        Book now
                      </button>
                        </>
                      )}

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* comments */}
      <div class="container mb-5">
        <div class="d-flex row">
          <div class="d-flex flex-column col-md-10">
            <div class="coment-bottom bg-white ">
              <div class="d-flex flex-row add-comment-section ">

                {sessionStorage.getItem('user_id') != null ? (
                  <>
                {/* <img
                  class=" img-responsive rounded-circle mr-2"
                  src="https://goodsamjc.org/wp-content/uploads/2020/01/16196015_10154888128487744_6901111466535510271_n.png"
                  width={38}
                /> */}
                <form onSubmit={saveComment}>
                <div class="d-flex flex-row ">
                  <h5 class="m-2">name</h5>
                  
                </div>
                  <input
                    type="text"
                    class="form-control m-2"
                    name="subject"
                    placeholder="Add comment"
                    onChange={handleComment}
                    value={com.subject}
                  />
                  <button  class="btn btn-primary m-2" type="submit">
                    Comment
                  </button>
                </form>
                <div class="commented-section mt-2">

                  </div>
                  <br />
                  <br />
                  <div>
                </div>
                

                  </>
                ):(
                  <a></a>
                )}
                
              </div>

            </div>
          </div>
        </div>
      </div>
      {comment.map((comments) => {
                  return (
                    
                    <div className="container mt-3" >
                      <h4>{comments.name}</h4>
                      <div>{comments.subject}</div>
                      <br />
                    </div>
                  );
                })}
    </>
  );
};

export default ViewRoom;
