import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <div>
      {authenticated === true ? (
        <h1>You are in!</h1>
      ) : (
        <p>Login or sign up, please.</p>
      )}
    </div>
  );
};

export default Private;
