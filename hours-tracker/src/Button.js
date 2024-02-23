
import './App.css';

// Currently not working...wondering why?
function startButton(){
  console.log("startButton function works1!");
}

function Button(props) {
    return (
      <>
        <div className="Button">
            <button>{props.name}</button>
        </div>
      </>
    );
  }
  
  export default Button;
  