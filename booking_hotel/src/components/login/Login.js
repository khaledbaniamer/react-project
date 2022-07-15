import React, { useContext} from "react";
import "./css/style.css";
import { useState } from "react";
import axios from "axios";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const { userData, setUserData } = useContext(userContext)

  const [user, setUser] = useState({
    email: "",
    pass: "",

  });

  const [error, setError] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:8000/api/login",
      data: user
    })
      .then((res) => {
        setUserData(res.data)

        if (res.data.errors) {
          setError(res.data.errors);
        } else {
          sessionStorage.setItem("user_id", res.data.id);
          navigate("/");
        }

      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };


  console.log(userData)
  return (
    <>
      <section className="vh-100 mt-5">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign In</h3>
                  <div style={{ color: "red" }}>{error[0]}</div>
                  <form
                    action="#"
                    onSubmit={handleSubmit}
                    classNameName="signin-form"
                  >
                    <div className="form-outline mb-4">
                      <label className="form-label" for="typeEmailX-2">
                        Email
                      </label>
                      <input
                        type="text"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        onChange={(e) =>
                          setUser((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        name="email"
                        value={user.email}
                        required
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="typePasswordX-2">
                        Password
                      </label>
                      <input
                        onChange={(e) =>
                          setUser((prev) => ({
                            ...prev,
                            pass: e.target.value,
                          }))
                        }
                        name="pass"
                        value={user.pass}
                        required
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                      style={{ backgroundColor: "#f3c300" }}
                    >
                      Login
                    </button>
                    <br/>
                    <span>DON’T HAVE AN ACCOUNT?  </span>
                    <a href="/register" style={{color:'red'}}>Sign Up</a>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


    </>
  );
};
export default Login
