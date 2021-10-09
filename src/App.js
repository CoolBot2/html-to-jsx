import logo from './logo.svg';
import './App.css';
import myWonderfulImage from "./CoolBot-and-the-air-conditioner-installed-inside-the-cold-storage-chamber.png"
function App() {
  
  return (
    <div className="App">

         <div style={{border:'solid 1px black', maxWidth:'100vw'}} >
      <h1 className="title red"> Your name goes here </h1>
    <br />
     <img src={myWonderfulImage} alt ='myImage' />
    <br />
      <img src="betelgeuse.jpg" alt="" srcset="" />
    </div>
    
    <video style={{width:'320',height:'240'}} controls   >
      <source src="" />
    </video>



      
  
  
   
    
    </div>
 
  );
}

export default App;
