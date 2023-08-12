import './App.css';
import NavBar from './componentes/navBar/NavBar';
import SocialMedia from './componentes/outros/redesSociais/socialMidia';
import Textos from './componentes/outros/textos/textos';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Textos/>
      <SocialMedia/>
    </div>
  );
}

export default App;
