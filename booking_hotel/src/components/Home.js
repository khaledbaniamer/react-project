import { NavLink } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { userContext } from "../App";
import ViewRoom from "./ViewRoom";
import Login from "./login/Login";


const Home = () => {
  
  const [data, getFetch] = useFetch("http://127.0.0.1:8000/api/apirooms");
  const { userData, setUserData } = useContext(userContext);
  useEffect(() => {
    getFetch();
  }, []);

      
   const handleClickHref = () => {
     if (sessionStorage.getItem(userData.id)) {
       return <ViewRoom />;
     } else {
       return <Login />;
     }
   };

  return (
    <>
      {/* 
   <!--================Banner Area =================--> */}
      <section className="banner_area">
        <div className="booking_table d_flex align-items-center">
          <div
            className="overlay bg-parallax"
            data-stellar-ratio="0.9"
            data-stellar-vertical-offset="0"
            data-background=""
          ></div>
          <div className="container">
            <div className="banner_content text-center">
              <h2>Relax Your Mind</h2>
              <p>
                If you are looking at blank cassettes on the web, you may be
                very confused at the
                <br /> difference in price. You may see some for as low as $17
                each.
              </p>
              <a href={"rooms"} className="btn theme_btn button_hover">
                Book now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================Banner Area =================-->
        
        <!--================ Accomodation Area  =================--> */}

      <section className="accomodation_area section_gap">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_color">Most requested rooms</h2>
            <p>
              We all live in an age that belongs to the young at heart. Life
              that is becoming extremely fast,{" "}
            </p>
          </div>

          <div className="row mb_30">
            {data
              .filter((room, idx) => idx < 3)
              .map((room) => {
                return (
                  <div className="col-lg-4 col-sm-6">
                    <div className="accomodation_item text-center">
                      <div className="hotel_img">
                        <img
                          src={"assets/image/" + room.room_image}
                          width="100%"
                          height="90%"
                          alt=""
                        />
                        <a
                          href={"ViewRoom/" + room.id}
                          className="btn theme_btn button_hover"
                          onClick={handleClickHref}
                        >
                          Book Now
                        </a>
                      </div>
                      <a href="#">
                        <h4 className="sec_h4">{room.room_name}</h4>
                      </a>
                      <h5>
                        {room.room_price}
                        <small>/night</small>
                      </h5>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      {/* <!--================ Accomodation Area  =================-->
        
        <!--================ Facilities Area  =================--> */}
      <section className="facilities_area section_gap">
        <div
          className="overlay bg-parallax"
          data-stellar-ratio="0.8"
          data-stellar-vertical-offset="0"
          data-background=""
        ></div>
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_w">Our Facilities</h2>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className="row mb_30">
            <div className="col-lg-4 col-md-6">
              <div className="facilities_item">
                <h4 className="sec_h4">
                  <i className="lnr lnr-dinner"></i>Restaurant
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="facilities_item">
                <h4 className="sec_h4">
                  <i className="lnr lnr-bicycle"></i>Sports CLub
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="facilities_item">
                <h4 className="sec_h4">
                  <i className="lnr lnr-shirt"></i>Swimming Pool
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="facilities_item">
                <h4 className="sec_h4">
                  <i className="lnr lnr-car"></i>Rent a Car
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="facilities_item">
                <h4 className="sec_h4">
                  <i className="lnr lnr-construction"></i>Gymnesium
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="facilities_item">
                <h4 className="sec_h4">
                  <i className="lnr lnr-coffee-cup"></i>Cofee
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid
                  advancement of technology and power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ Facilities Area  =================-->
        
        <!--================ About History Area  =================--> */}
      <section className="about_history_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d_flex align-items-center">
              <div className="about_content ">
                <h2 className="title title_color">Mission & Vision </h2>
                <p>
                  Conf deluxe is a five-star deluxe luxury hotel with a
                  prestigious address next to the Fifth Circle of Amman,
                  centrally located within walking distance of the city's most
                  affluent neighborhoods of Abdoun and the adjacent diplomatic
                  area.
                </p>
                <a href="/about" className="button_hover theme_btn_two">
                  read more...
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="https://hotelfurnitureconcept.com/wp-content/uploads/2021/02/hotel-reception-desk-made-in-Turkey-0-1-16.12.32.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ About History Area  =================-->
        
        <!--================ Testimonial Area  =================--> */}
      {/* <section className="testimonial_area section_gap">
            <div className="container">
                <div className="section_title text-center">
                    <h2 className="title_color">Testimonial from our Clients</h2>
                    <p>The French Revolution constituted for the conscience of the dominant aristocratic className a fall from </p>
                </div>
                <div className="testimonial_slider owl-carousel">
                    <div className="media testimonial_item">
                        <img className="rounded-circle" src="./assets/image/testtimonial-1.jpg" alt=""/>
                        <div className="media-body">
                            <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                            <a href="#"><h4 className="sec_h4">Fanny Spencer</h4></a>
                            <div className="star">
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star-half-o"></i></a>
                            </div>
                        </div>
                    </div>    
                    <div className="media testimonial_item">
                        <img className="rounded-circle" src="./assets/image/testtimonial-1.jpg" alt=""/>
                        <div className="media-body">
                            <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                            <a href="#"><h4 className="sec_h4">Fanny Spencer</h4></a>
                            <div className="star">
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star-half-o"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="media testimonial_item">
                        <img className="rounded-circle" src="./assets/image/testtimonial-1.jpg" alt=""/>
                        <div className="media-body">
                            <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                            <a href="#"><h4 className="sec_h4">Fanny Spencer</h4></a>
                            <div className="star">
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star-half-o"></i></a>
                            </div>
                        </div>
                    </div>    
                    <div className="media testimonial_item">
                        <img className="rounded-circle" src="./assets/image/testtimonial-1.jpg" alt=""/>
                        <div className="media-body">
                            <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                            <a href="#"><h4 className="sec_h4">Fanny Spencer</h4></a>
                            <div className="star">
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star-half-o"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
      {/* <!--================ Testimonial Area  =================-->
        
        <!--================ Latest Blog Area  =================--> */}
      <section className="latest_blog_area section_gap">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_color">Last activities</h2>
            <p></p>
          </div>
          <div className="row mb_30">
            <div className="col-lg-4 col-md-6">
              <div className="single-recent-blog-post">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Gala-Dinner-Venue-Hard-Rock-Hotel-Punta-Cana-Prestigious-Venues.jpg"
                    alt="post"
                  />
                </div>
                <div className="details">
                  <a href="#">
                    <h4 className="sec_h4">Wedding reservations</h4>
                  </a>
                  <p>
                    Acres of Diamonds… you’ve read the famous story, or at least
                    had it related to you. A farmer.
                  </p>
                  <h6 className="date title_color">Every Friday </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-recent-blog-post">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://www.lujohotel.com/assets/new-photos/experiences/arena/arena-01.jpg"
                    alt="post"
                    //   style={{hieght:"209.44px"}}
                  />
                </div>
                <div className="details">
                  <a href="#">
                    <h4 className="sec_h4">Summer concert</h4>
                  </a>
                  <p>
                    Self-doubt and fear interfere with our ability to achieve or
                    set goals. Self-doubt and fear are
                  </p>
                  <h6 className="date title_color">31st July,2018</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-recent-blog-post">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://media1.popsugar-assets.com/files/thumbor/-IwwPagbiI7cxtLOSjoIoO49smI/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2019/04/16/883/n/43645388/4ae0e6d4212b9909_8_11_DVC_95353_copy/i/Best-Family-Resorts-Hawaii.jpg"
                    alt="post"
                  />
                </div>
                <div className="details">
                  <a href="#">
                    <h4 className="sec_h4">
                    Kids activities
                    </h4>
                  </a>
                  <p>
                    Why do you want to motivate yourself? Actually, just
                    answering that question fully can{" "}
                  </p>
                  <h6 className="date title_color">Every Saturday</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ Recent Area  =================--> */}
    </>
  );
};

export default Home;
