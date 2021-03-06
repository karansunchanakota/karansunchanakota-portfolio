import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from './containers/Navbar/Navbar'
import Main from './containers/Main/Main'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
