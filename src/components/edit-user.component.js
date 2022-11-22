import React, {Component} from "react"; /*component es una clase de react*/
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class editUser extends Component{
    
    constructor(props){
        super(props);

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

    componentDidMount(){//se ejecuta inmediatamente despues de que el componente es montado sobre el dom
        axios
            .get("http://localhost:4000/users/edit-user/" + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    nombre:res.data.nombre,
                    apellido:res.data.apellido,
                    correo:res.data.correo,
                    password:res.data.password,
                    admin:res.data.admin,
                    estado:res.data.estado,
                    avatar:res.data.avatar,
                    descripcion:res.data.descripcion,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onChangeUserNombre(e){
        this.setState({nombre:e.target.value});//target es una propiedad de la clase event, sirve para interactuar con los elementos del dom
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
            nombre:this.state.nombre, //las tres propiedades tienen el mismo nombre (name,email,rollno) pero no son las mismas de la clase, pero se les asigna el de clase
            apellido:this.state.apellido,
            correo:this.state.correo,
            password:this.state.password,
            admin:this.state.admin,
            estado:this.state.estado,
            avatar:this.state.avatar,
            descripcion:this.state.descripcion,
        };

        axios
            .put("http://localhost:4000/users/update-user/" + this.props.match.params.id,
                 studentObject)
            .then((res) => {
                console.log(res.data);
                console.log("Usuario actualizado con éxito!");
            })
            .catch((error) => {
                console.log(error);
            });
        
        this.props.history.push("/user-list");
    }

    render(){
        return(
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.nombre}
                            onChange={this.onChangeUserNombre}
                        />
                    </Form.Group>
                    <Form.Group controlId="Apellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="apellido"
                            value={this.state.apellido}
                            onChange={this.onChangeUserApellido}
                        />
                    </Form.Group>
                    <Form.Group controlId="Correo">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.correo}
                            onChange={this.onChangeUserCorreo}
                        />
                    </Form.Group>

                    <Form.Group controlId="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.password}
                            onChange={this.onChangeUserPassword}
                        />
                    </Form.Group>


                    <Form.Group controlId="Admin">
                        <Form.Label>Admin</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.admin}
                            onChange={this.onChangeUserAdmin}
                        />
                    </Form.Group>


                    <Form.Group controlId="Estado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.estado}
                            onChange={this.onChangeUserEstado}
                        />
                    </Form.Group>


                    <Form.Group controlId="Avatar">
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.avatar}
                            onChange={this.onChangeUserAvatar}
                        />
                    </Form.Group>


                    <Form.Group controlId="Descripción">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.descripcion}
                            onChange={this.onChangeUserDescripcion}
                        />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        Actualizar usuario
                    </Button>
                </Form>
            </div>
        );
         
    }
}