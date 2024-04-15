import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import background from "../assets/background.jpg";
const Login = () => {
  const regEmailElement = useRef();
  const nav = useNavigate();
  // const [userData, setUserData] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    const regEmail = regEmailElement.current.value;
    const users = JSON.parse(localStorage.getItem("user"));

    if (!users) {
      // If user data is not present, show an alert
      alert("No user data found. Please register to login.");
      return;
    }

    const foundUser = users.find((user) => user.uEmail === regEmail);
    if (foundUser) {
      console.log("User's name:", foundUser.uName);
      localStorage.setItem("loggedUserName", foundUser.uName);
      localStorage.setItem("loggedUserEmail", foundUser.uEmail);
      localStorage.setItem("loggedInStatus", true);
      nav("/");
      window.location.reload();
    } else {
      console.log("User with email", regEmail, "not found");
      alert(
        "User with email " + regEmail + " not found. Please register to login."
      );
    }
  };


  return (
    <div className="media">
      <header>
        <div>
          <h1 className="logo">WATCHLISTS</h1>
        </div>
      </header>
      <img src={background} className="img" width=""></img>
      <form onSubmit={handleLogin} className="text">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h3>
          Don't have an account?{" "}
          <Link className="registrationLink" to="/registration">
            Create one
          </Link>
        </h3>
        <h4>Ready to watch? Enter your email to continue where you left.</h4>
        <div>
          <input
            type="Email"
            placeholder="Email address"
            className="me-2 loginInput"
            ref={regEmailElement}
          />
          <button className="loginButton">Get Started</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
