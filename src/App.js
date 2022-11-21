import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; /*Esto se importo paa crear los elemnetos rapidamente*/ 
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";

/*import { Navbar } from 'react-bootstrap';*/


function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    /*Aqui vamos a comenzar a crear nuestro menu de navegacion*/
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg='dark' variant='dark'>
             <Container>
              <Navbar.Brand>  
                <Link to={"/create-student"} className="nav-link">
                  App React MERN Stack
                </Link> 
              </Navbar.Brand>

              <Nav className='justify-content-end'>
                <Nav>
                  <Link to={"/create-student"} className="nav-link">
                    Crear Estudiantes
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/student-list"} className="nav-link">
                    Listar Estudiantes
                  </Link>
                </Nav>
              </Nav>
             </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className='wrapper'>
                <Switch>
                  <Route exact path="/" component={(props) => <CreateStudent {...props} />} /> 

      
                  <Route exact path="/create-student" component={(props) => <CreateStudent {...props} />} />

                  
                  <Route exact path="/edit-student/:id" component={(props) => <EditStudent {...props} />} />

                  
                  <Route exact path="/student-list" component={(props) => <StudentList {...props} />} />

                  
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;

//estos comentarios para saber que cambie el codigo kgbligli
