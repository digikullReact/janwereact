import { Navigate } from "react-router-dom";



// this is known as higher order component


function Protectedroute({ children }) {

  //const auth = useAuth();
const token=localStorage.getItem("token");

  return token ? children : <Navigate to="/login" />;
}

export default Protectedroute;