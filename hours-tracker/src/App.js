
import './App.css';
import Button from './Button';

onclick="startButton()"


function App() {
  return (
    <>
      <div>
        <Button name="Start"/>
      </div>
      <div>
        <Button name="Stop"/>
      </div>
      <div class="infoBox">
        <text id="info">Info</text>
        <text id="in">In</text>
        <text id="out">Out</text>
      </div>
      <div>
        <text id="infoLog"></text>
        <text id="inLog"></text>
        <text id="outLog"></text>
      </div>
    </>
  );
}

export default App;
