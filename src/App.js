import { Prfilecomponenet } from "./profile/profilecomponenet";
import React from "react";
import Handlename from "./profile/handlename";
import Default from "./profile/default";

function App() {

  return (<div>
    <Default e='GOMYCODE'/>
    <Handlename name='lyes'/>
    <Prfilecomponenet name='gomycode' bio='ecole' profession='fullstack js' src='logo192.png'/>
      
   </div>
  )
}

export default App;
