import './App.css';
import { signInWithGoogle } from './Firebae';
import GoogleIcon from '@mui/icons-material/Google';


function App() {
  return (
    <div className="App">
      <h2>Google Authentication</h2>
      <button onClick={signInWithGoogle}><GoogleIcon style = {{width:"15px",height:"15px",color:"blue"}}></GoogleIcon> Sign In With Google</button>
      <h1>{localStorage.getItem("name")}</h1>
      <p>{localStorage.getItem("email")}</p>
      <img src={localStorage.getItem("profilePic")} alt="profilePic" />
      

    </div>
  );
}

export default App;
