import React from "react";
import PropTypes from "prop-types";
import OutsideClickHandler from "react-outside-click-handler";
import DropDownUserCard from "./DropDownUserCard";

const AccountDropDown = ({ currentUser, close, logout }) => {
  return (
    <OutsideClickHandler onOutsideClick={() => close()}>
      <div className="account dropdown">
        <DropDownUserCard user={currentUser} close={close} />
        <div className="logout" onClick={() => logout()}>
          <i className="fas fa-sign-out-alt" />
          <span>Log Out</span>
        </div>
      </div>
    </OutsideClickHandler>
  )
};

AccountDropDown.propTypes = {
  currentUser: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default AccountDropDown;