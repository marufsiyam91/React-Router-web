import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/Firebase";
import logo from "../../assets/Images/Logo.png";
import background from "../../assets/Images/background.png";
import google from "../../assets/Images/google 1.png";
import "./LogIn.css";

const LogIn = () => {

  const [userData, setuserData] = useState({
    email: '',
    password: ''
  })

  const handleSignin = async () => {
    try{
      createUserWithEmailAndPassword(auth, userData.email, userData.password)
    }
    catch (error){
      console.log(error )
    }
 
  }


  const handleOnchange = (event) => {
    setuserData({
      ...userData,
      [event.target.name] : event.target.value
    })
    console.log(userData)
  }

  

  return (
    <div>
      <section classNameName="basic-form-area">
        <div className="form-content">
          <div className="form-main">
            <img src={logo} alt="" className="logo" />
            <h2>Welcome Ruix</h2>
            <h3>Welcome to Ruix. dashboard Community</h3>
            <button className="log-with-google">
              {" "}
              <img src={google} alt="" /> Continue With Google
            </button>
            <div className="or-area">
              <hr />
              <p>or</p>
              <hr />
            </div>
            <form>
              <input 
              type="text" 
              placeholder="Name" 
              required 
              />

              <input 
              type="email" 
              name='email'
              placeholder="Email" 
              onChange={handleOnchange}
              required 
              />

              <input 
              type="password" 
              placeholder="Password" 
              name='password'
              onChange={handleOnchange}
              required 
              />

              <label for="input-checkbox">
                <input
                  id="input-checkbox"
                  className="input-checkbox"
                  type="checkbox"
                  placeholder="Remember Me"
                  required
                />
                Remember Me
              </label>
            </form>
            <button onClick={handleSignin} className="register-btn">Register</button>
            <h4>
              Already have an account?{" "}
              <span className="log-in-color">Log in</span>
            </h4>
          </div>

          <div className="form-right">
            <img src={background} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
