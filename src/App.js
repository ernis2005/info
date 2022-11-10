import {Canvas} from "@react-three/fiber"
import './App.css';
import Box from "./Box";

function App() {
  return (
    <div className="App">
<Canvas camera={{position :[0,0,5]}}>
<Box className="red" position={[-4,0,0]}/>
<Box className="red" position={[0,0,0]} rotat={[Math.PI/ 4, Math.PI/ 4,0]}/>
<Box className="red" position={[-4,0,0]}/>
<Box className="red" position={[0,0,0]}/>
</Canvas>
  
    </div>
  );
}

export default App;
