import react from "react";
import Address from "./comp/Address";
import FullName from "./comp/FullName";
import ProfilePhoto from "./comp/ProfilePhoto";

const App = () => {
  return (
    
    <div className="App">
        <ProfilePhoto/>
        <FullName/>
        <Address/>
    </div>
  );
 };
 export default App;