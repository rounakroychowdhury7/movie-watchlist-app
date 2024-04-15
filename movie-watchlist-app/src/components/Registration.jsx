import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import background from "../assets/background.jpg";
const Registration = () => {
  const [userData, setUserData] = useState([]);
  const userEmailElement = useRef();
  const userNameElement = useRef();
  const nav = useNavigate();

  const handleSubmission = (e) => {
    e.preventDefault();
    const userEmail = userEmailElement.current.value;
    const userName = userNameElement.current.value;
    const existingUserData = JSON.parse(localStorage.getItem("user")) || [];
    const existingUser = existingUserData.find(
      (user) => user.uEmail === userEmail
    );
    if (existingUser) {
      alert("User email already exists!");
      return;
    }
    const newUser = { uName: userName, uEmail: userEmail };
    const updatedUserData = [...existingUserData, newUser];
    setUserData(updatedUserData);
    localStorage.setItem("user", JSON.stringify(updatedUserData));
    nav("/login");
  };


  return (
    <div className="media">
      <header>
        <div>
          <h1 className="logo">WATCHLISTS</h1>
        </div>
      </header>
      <img src={background} className="img" width=""></img>
      <form onSubmit={handleSubmission} className="loginForm">
        <div className="mb-3">
          <h1 className="signIn">Let's get started</h1>
        </div>
        <div className="mb-3">
          <input
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={userNameElement}
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <input
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={userEmailElement}
            placeholder="Email Address"
          />
        </div>
        <button type="submit" className="btn btn-danger mb-3 submit">
          Register
        </button>
        <div className="mb-3 register">
          Already have an account ? <Link to="/login">Sign in</Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
