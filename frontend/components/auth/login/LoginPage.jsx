import React from "react";
import { connect } from "react-redux";
import SignupPage from "../signup/SignupPage";
import Banner from "./Banner";
import Footer from "./Footer";
import LoginFormContainer from "./login_form_container";

const LoginPage = ({ modal }) => (
  <div className="login-container">
    <div className="login-page">
      <Banner />
      <LoginFormContainer />

      {modal === "signup" && <SignupPage />}
    </div>
    <Footer />
  </div>
);

const mapStateToProps = ({ ui }) => ({
  modal: ui.modal,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);