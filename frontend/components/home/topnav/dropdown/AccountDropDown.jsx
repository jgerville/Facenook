import React, { useEffect } from "react";
import PropTypes from "prop-types";
import DropDownUserCard from "./DropDownUserCard";

const AccountDropDown = ({ currentUser, close, logout, getUserInfo }) => {
  useEffect(() => {
    if (!currentUser.fname) getUserInfo(currentUser.id)
  }, [])
  
  const handleClick = (func) => (e) => {
    close();
    func();
  }

  return (
    <div className="outer-dropdown" onClick={() => close()}>
      <div className="account dropdown">
        <DropDownUserCard user={currentUser} close={close} />
        <div className="separator" />
        <div className="logout" onClick={handleClick(logout)}>
          <i className="fas fa-sign-out-alt" />
          <span>Log Out</span>
        </div>
      </div>
    </div>
  )
};

AccountDropDown.propTypes = {
  currentUser: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
};

export default AccountDropDown;