import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./Login";
import './registration.css'

function Registration() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [place, setPlace] = useState("");



  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);



  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password ||!place) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem(
          "jithin", 
          JSON.stringify(email));
      localStorage.setItem(
        "jmj1234",
        JSON.stringify(password)
      );

    // console.log("stored");

      setLogin(!login);
    }
  }




  return (
    <>

      <div>
       
        {login ? 
        
        
        (
          <form onSubmit={handleFormSubmit}>
            <h2 className="registerhead">Registration</h2>
            

            <br></br>
            {/* jj */}
            {/* name */}
            <div className="form-group">
              <table className="container">
                <tr>
                  <td className="heading"><b>Name</b></td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      name="name"
                      onChange={(event) => setName(event.target.value)} />
                  </td>
                </tr>
              </table>
            </div>


            {/* email */}
            <div className="form-group">
              <table className="container">
                <tr>
                  <td className="heading"><b>Email</b></td>
                  <td>:</td>
                  <td><input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  </td>
                </tr>
              </table>
            </div>


            {/* password */}
            <div className="form-group">
              <table className="container">
                <tr>
                  <td  className="heading"><b>Password</b></td>
                  <td>:</td>
                  <td><input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
                  </td>
                </tr>
              </table>
            </div>


              {/* place */}
              <div className="form-group">
              <table className="container">
                <tr>
                  <td className="heading"><b>Place</b></td>
                  <td>:</td>
                  <td> <input
                type="text"
                className="form-control"
                placeholder="Enter place"
                onChange={(event) => setPlace(event.target.value)}
              />
                  </td>
                </tr>
              </table>
            </div>


           

            





            <div>
            <button type="submit" id="register" className="btn btn-dark btn-lg btn-block">
            <b>Register</b>
            </button>
            

            


            </div>
            <br></br>
            {flag && (
              <Alert>
                *All Fields are mandatory
              </Alert>
            )}

            

          </form>
        ) 


        : 
        
        (
          <Login />
        )}
      </div>

    </>
  );
}

export default Registration;
