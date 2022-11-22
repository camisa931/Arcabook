import React from 'react';
//import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

/*/

import Navbar from "./components/Navbar/Navbar.module.css";
import Nav from "./components/Navbar/Navbar.module.css";

/*/

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; /*Esto se importo paa crear los elemnetos rapidamente*/ 
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
//import CreateStudent from "./components/create-student.component";
//import EditStudent from "./components/edit-student.component";
//import studentList from "./components/student-list.component";

//
import CreateUer from "./components/crate-user.component";
import UserList from "./components/user-list.component";
import EditUser from "./components/edit-user.component";

import Aracabook from "./components/arcabook-component";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
//import Background from './components/Landingpage/Background';

/*import { Navbar } from 'react-bootstrap';*/


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container>
          <Row>
            <Col md={12}>
              <div className='wrapper'>
                <Switch>
                  <Route exact path="/" component={(props) => <Aracabook {...props} />} /> 
      
                  <Route exact path="/create-user" component={(props) => <CreateUer {...props} />} />
                
                  <Route exact path="/edit-user/:id" component={(props) => <EditUser {...props} />} />
                  
                  <Route exact path="/user-list" component={(props) => <UserList {...props} />} />
                  
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
  
      <Footer />
    </div>
/*
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
*/
  );
}

export default App;

//estos comentarios para saber que cambie el codigo kgbligli
