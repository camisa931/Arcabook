
//
import React, {Component} from "react"; /*component es una clase de react*/
import Form from "react-bootstrap/Form"//etiqueta para formularios
import Button from "react-bootstrap/Button";
import axios from "axios";


export default class CreateUser extends Component{ //En este componente se va a crear un formulario

    constructor(props){
        super(props); // esta linea siempre va de primeras
        this.onChangeUserNombre = this.onChangeUserNombre.bind(this);
        this.onChangeUserApellido = this.onChangeUserApellido.bind(this);
        this.onChangeUserCorreo = this.onChangeUserCorreo.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onChangeUserAdmin = this.onChangeUserAdmin.bind(this);
        this.onChangeUserEstado = this.onChangeUserEstado.bind(this);
        this.onChangeUserAvatar = this.onChangeUserAvatar.bind(this);
        this.onChangeUserDescripcion = this.onChangeUserDescripcion.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            nombre:"",
            apellido:"",
            correo:"",
            password:"",
            admin:"",
            estado:"",
            avatar:"",
            descripcion:"",
        };
    }

    onChangeUserNombre(e){// con la sola letra e se accedio a la clase event
        this.setState({nombre:e.target.value}); //setstate no se usa dentro del constructor
    }

    onChangeUserApellido(e){
        this.setState({apellido:e.target.value});
    }

    onChangeUserCorreo(e){
        this.setState({correo:e.target.value});
    }

    onChangeUserPassword(e){
        this.setState({password:e.target.value});
    }

    onChangeUserAdmin(e){
        this.setState({admin:e.target.value});
    }

    onChangeUserEstado(e){
        this.setState({estado:e.target.value});
    }

    onChangeUserAvatar(e){
        this.setState({avatar:e.target.value});
    }

    onChangeUserDescripcion(e){
        this.setState({descripcion:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const studentObject = {
            nombre:this.state.nombre,
            apellido:this.state.apellido,
            correo:this.state.correo,
            password:this.state.password,
            admin:this.state.admin,
            estado:this.state.estado,
            avatar:this.state.avatar,
            descripcion:this.state.descripcion,
        };
        
        axios
            .post("http://localhost:4000/users/create-user", studentObject)
            .then((res) => console.log(res.data));  
            window.location.href = "/user-list";     
        this.setState({nombre:"",apellido:"",correo:"",password:"",admin:"",estado:"",avatar:"",descripcion:""});
    } 

    render(){
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>

                    <Form.Group controlId="Nombre">
                        <Form.Label> Nombre </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.nombre}
                            onChange={this.onChangeUserNombre} />
                    </Form.Group>

                    <Form.Group controlId="Apellido">
                        <Form.Label> Apellido </Form.Label>
                        <Form.Control 
                            type="apellido"
                            value={this.state.apellido}
                            onChange={this.onChangeUserApellido}/>
                    </Form.Group>

                    <Form.Group controlId="Correo">
                        <Form.Label> Correo </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.correo}
                            onChange={this.onChangeUserCorreo}/>
                    </Form.Group>

                    <Form.Group controlId="Password">
                        <Form.Label> Password </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.password}
                            onChange={this.onChangeUserPassword}/>
                    </Form.Group>

                    <Form.Group controlId="Admin">
                        <Form.Label> Admin </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.admin}
                            onChange={this.onChangeUserAdmin}/>
                    </Form.Group>

                    <Form.Group controlId="Estado">
                        <Form.Label> Estado </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.estado}
                            onChange={this.onChangeUserEstado}/>
                    </Form.Group>

                    <Form.Group controlId="Avatar">
                        <Form.Label> Avatar </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.avatar}
                            onChange={this.onChangeUserAvatar}/>
                    </Form.Group>

                    <Form.Group controlId="Descripcion">
                        <Form.Label> Descripcion </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.descripcion}
                            onChange={this.onChangeUserDescripcion}/>
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
                        Nuevo usuario
                    </Button>
                </Form>
                <br/><br/><br/>
            </div>
        );
    }
}