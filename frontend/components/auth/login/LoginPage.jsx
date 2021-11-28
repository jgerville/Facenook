import React from "react";
import { connect } from "react-redux";
import SignupPage from "../signup/SignupPage";
import Banner from "./Banner";
import Footer from "./Footer";
import LoginFormContainer from "./login_form_container";
import PropTypes from 'prop-types';

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

LoginPage.propTypes = {
  modal: PropTypes.string,
}

const mapStateToProps = ({ ui }) => ({
  modal: ui.modal,
});

export default connect(mapStateToProps, null)(LoginPage);