import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const LoginForm = ({ errors, login, openModal }) => {
  const navigate = useNavigate();

  const [{ email, password }, setValues] = useState({
    email: "",
    password: "",
  });

  const update = (field) => (e) =>
    setValues((oldValues) => ({
      ...oldValues,
      [field]: e.target.value,
    }));

  const openSignup = (e) => {
    e.preventDefault();
    openModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login({ email, password });
    if (response.type !== 'RECEIVE_LOGIN_ERRORS') {
      navigate('/');
    }
  };

  const demoLogin = (e) => {
    e.preventDefault();
    login({ email: "fake@fake.fake", password: "fakefake" });
    navigate('/')
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        required
        onChange={update("email")}
        value={email}
        placeholder="Email"
      />

      <input
        type="password"
        required
        onChange={update("password")}
        value={password}
        placeholder="Password"
      />

      {errors.response &&
        Array.isArray(errors.response.data) &&
        errors.response.data.map((error, idx) => (
          <p className="login-error" key={idx}>
            {error}
          </p>
        ))}

      <button className="login-button" type="submit">
        Log In
      </button>

      <button className="login-button" onClick={demoLogin}>
        Demo User
      </button>

      <div className="separator" />

      <button className="create-account-button" onClick={openSignup}>
        Create new account
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  errors: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  login: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default LoginForm;