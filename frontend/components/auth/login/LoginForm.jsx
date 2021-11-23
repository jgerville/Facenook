import React, { useState } from "react";

const LoginForm = ({ errors, login, openModal }) => {
  const [{ email, password }, setValues] = useState({
    email: "",
    password: "",
  });

  const update = (field) => (e) =>
    setValues((oldValues) => ({
      ...oldValues,
      [field]: e.target.value,
    }));

  console.log(errors.response);

  const openSignup = (e) => {
    e.preventDefault();
    openModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={update("email")}
        value={email}
        placeholder="Email"
      />

      <input
        type="password"
        onChange={update("password")}
        value={password}
        placeholder="Password"
      />

      {errors.response &&
        errors.response.data.map((error, idx) => (
          <p className="login-error" key={idx}>
            {error}
          </p>
        ))}

      <button className="login-button" type="submit">
        Log In
      </button>

      <div className="separator" />

      <button className="create-account-button" onClick={openSignup}>
        Create new account
      </button>
    </form>
  );
};

export default LoginForm;