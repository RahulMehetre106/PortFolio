import { RouterProvider } from "react-router-dom";
import Routing from "./Routing";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  return (
    <RouterProvider  router={Routing} />
  );
}

export default App;
