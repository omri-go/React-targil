import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import {Outlet} from "react-router-dom";

const App=()=> {
  return (
    <div >
        <MyNavbar></MyNavbar>
        <Outlet/>
        <MyFooter></MyFooter>
    </div>
  );
}

export default App;
