import React, { useState } from "react";
import "./auth.css";
import RadioButtons from "../components/RadioButtons";
const Auth = () => {
  //   const {
  //     error,
  //     BaseUrl,
  //     setError,
  //     user,
  //     setUser,
  //     isSignup,
  //     setSignup,
  //     setLogin,
  //   } = useContext(userContext);
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [error, setError] = useState("");
  const [user, setUser] = useState(initialState);
  const [signup, setSignup] = useState(false);
  const [isManager, SetManager] = useState(false);
  const [login, setLogin] = useState(false);
  const [role, setRole] = useState("Assistant");

  // const [isSignup, setSignup] = useState(true);

  function showErr(err) {
    setError(err);
    setTimeout(() => setError(""), 3000);
  }

  //=======================================================================

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <div className="auth-page">
      <div className="container">
        <div className="logo">
          <h1>MetaGeeks</h1>
        </div>
        <div className="form-div">
          <form>
            {signup ? (
              <div className="fieldf">
                <div className="fieldt">
                  <label className="lable">Name</label>
                  <input
                    className="input-text"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={user.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            ) : null}

            <div className="rem-form-div">
              <div className="field">
                <label className="lable">email</label>
                <input
                  className="input-text"
                  name="email"
                  type="email"
                  placeholder="email"
                  value={user.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="field">
                <label className="lable">password</label>
                <input
                  className="input-text"
                  name="password"
                  type="password"
                  placeholder="password"
                  value={user.password}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="radioBtn">
              {signup ? <RadioButtons props={{ role: role, setRole }} /> : null}
            </div>
          </form>
        </div>
        <div className="btn-con">
          {signup ? (
            <button className="btn">Sign Up</button>
          ) : (
            <button className="btn">Login</button>
          )}
        </div>
        <div className="is-account" onClick={() => setSignup(!signup)}>
          {signup ? (
            <p>alreday have an account</p>
          ) : (
            <p>don't have an account</p>
          )}
        </div>

        <p className="err">{error}</p>
      </div>
    </div>
  );
};

export default Auth;
