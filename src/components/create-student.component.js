import React, {Component} from "react"; /*component es una clase de react*/
import Form from "react-bootstrap/Form"//etiqueta para formularios
import Button from "react-bootstrap/Button";
import axios from "axios";


export default class CreateStudent extends Component{ //En este componente se va a crear un formulario

    constructor(props){
        super(props); // esta linea siempre va de primeras
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollNo = this.onChangeStudentRollNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name:"",
            email:"",
            rollno:"",
        };
    }

    onChangeStudentName(e){// con la sola letra e se accedio a la clase event
        this.setState({name:e.target.value}); //setstate no se usa dentro del constructor
    }

    onChangeStudentEmail(e){
        this.setState({email:e.target.value});
    }

    onChangeStudentRollNo(e){
        this.setState({rollno:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const studentObject = {
            name:this.state.name,
            email:this.state.email,
            rollno:this.state.rollno,
        };
        
        axios
            .post("http://localhost:4000/students/create-student", studentObject)
            .then((res) => console.log(res.data));
        
        this.setState({name:"",email:"",rollno:""});    
    } 

    render(){
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>

                    <Form.Group controlId="Name">
                        <Form.Label> Nombre </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.name}
                            onChange={this.onChangeStudentName} />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label> Correo electronico </Form.Label>
                        <Form.Control 
                            type="email"
                            value={this.state.email}
                            onChange={this.onChangeStudentEmail}/>
                    </Form.Group>

                    <Form.Group controlId="Codigo">
                        <Form.Label> Codigo </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.rollno}
                            onChange={this.onChangeStudentRollNo}/>
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
                        Crear Estudiante
                    </Button>
                </Form>
            </div>
        );
    }
}