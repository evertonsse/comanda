import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import App from "./App";


export const PrivateRoute = () => {
  const { signed } = useContext(AuthContext);
  return signed ? <App /> : <Navigate to="/login" />;
};