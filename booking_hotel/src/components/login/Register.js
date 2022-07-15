import React from "react";
import { useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const Register = () => {
const navigate = useNavigate();
    const [user, setUser] = useState({
     name: "",
     phone: "",
     email:"",
     pass:"",
    });
const [error,setError] = useState([]);
const handleSubmit =(e)=> {
  e.preventDefault();

  axios({
    method: "post",
    url: "http://localhost:8000/api/register",
    data:user,

  }).then(res=>{
    console.log(res)
    if(res.data.errors){
  setError(res.data.errors)
    }
    else{
     alert('Successfully Regiseration');
     navigate('/login')
    }
  
  }).catch(error=>{
    console.log(error.response.data.message);
    
  });
}

  return (
    <>
      <section className="vh-100 m-5">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign Up</h3>
                  <div style={{color:'red'}}>{error[0]}</div>
                  <form
                    action="#"
                    onSubmit={handleSubmit}
                    classNameName="signin-form"
                  >
                    <div className="form-outline mb-4">
                      <label className="form-label" for="typeEmailX-2">
                        Name
                      </label>

                      <input
                        onChange={(e) =>
                          setUser((prev) => ({ ...prev, name: e.target.value }))
                        }
                        type="text"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        name="name"
                        value={user.name}
                      />
                    </div>

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
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="typeEmailX-2">
                        Phone
                      </label>
                      <input
                        type="text"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        onChange={(e) =>
                          setUser((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        name="phone"
                        value={user.phone}
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
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                      style={{ backgroundColor: "#f3c300" }}>
                      Register
                    </button>
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
export default Register;
