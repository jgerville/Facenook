/* eslint-disable react/jsx-props-no-spreading */

// thanks to nicoburns on Github for the inspiration:
// I made this because withRouter was deprecated in React Router v6
// This allows me to still use a redux container
// to connect my presentational component to the app state.
// https://github.com/remix-run/react-router/issues/7256

import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function withRouter(Child) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Child
        {...props}
        navigate={navigate}
        params={params}
        location={location}
      />
    );
  };
}
