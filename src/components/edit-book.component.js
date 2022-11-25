import React, {Component} from "react"; /*component es una clase de react*/
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class editBook extends Component{
    
    constructor(props){
        super(props);
        this.onChangeBookIduser = this.onChangeBookIduser.bind(this);
        this.onChangeBookTitlulo = this.onChangeBookTitlulo.bind(this);
        this.onChangeBookEditorial = this.onChangeBookEditorial.bind(this);
        this.onChangeBookFechaedicion = this.onChangeBookFechaedicion.bind(this);
        this.onChangeBookPaginas = this.onChangeBookPaginas.bind(this);
        this.onChangeBookAutor = this.onChangeBookAutor.bind(this);
        this.onChangeBookEstado = this.onChangeBookEstado.bind(this);
        this.onChangeBookCaratula = this.onChangeBookCaratula.bind(this);
        this.onChangeBookDescripcion = this.onChangeBookDescripcion.bind(this);
        this.onChangeBookGenero = this.onChangeBookGenero.bind(this);
        this.onChangeBookDisponible = this.onChangeBookDisponible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            iduser:"",
            titulo:"",
            editorial:"",
            fecha_edicion:"",
            paginas:"",
            autor:"",
            estado:"",
            caratula:"",
            descripcion:"",
            genero:"",
            disponible:"",
        };
    }

    componentDidMount(){//se ejecuta inmediatamente despues de que el componente es montado sobre el dom
        axios
            .get("http://localhost:4000/books/edit-book/" + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    iduser:res.data.iduser,
                    titulo:res.data.titulo,
                    editorial:res.data.editorial,
                    fecha_edicion:res.data.fecha_edicion,
                    paginas:res.data.paginas,
                    autor:res.data.autor,
                    estado:res.data.estado,
                    caratula:res.data.caratula,
                    descripcion:res.data.descripcion,
                    genero:res.data.genero,
                    disponible:res.data.disponible,
                });
            
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onChangeBookIduser(e){
        this.setState({iduser:e.target.value});//target es una propiedad de la clase event, sirve para interactuar con los elementos del dom
    }

    onChangeBookTitlulo(e){
        this.setState({titulo:e.target.value});
    }

    onChangeBookEditorial(e){
        this.setState({editorial:e.target.value});
    }

    onChangeBookFechaedicion(e){
        this.setState({fecha_edicion:e.target.value});
    }

    onChangeBookPaginas(e){
        this.setState({paginas:e.target.value});
    }

    onChangeBookAutor(e){
        this.setState({autor:e.target.value});
    }

    onChangeBookEstado(e){
        this.setState({estado:e.target.value});
    }

    onChangeBookCaratula(e){
        this.setState({caratula:e.target.value});
    }

    onChangeBookDescripcion(e){
        this.setState({descripcion:e.target.value});
    }

    onChangeBookGenero(e){
        this.setState({genero:e.target.value});
    }

    onChangeBookDisponible(e){
        this.setState({disponible:e.target.value});
    }


    onSubmit(e){
        e.preventDefault();
        const studentObject = {
            iduser:this.state.iduser,
            titulo:this.state.titulo,
            editorial:this.state.editorial,
            fecha_edicion:this.state.fecha_edicion,
            paginas:this.state.paginas,
            autor:this.state.autor,
            estado:this.state.estado,
            caratula:this.state.caratula,
            descripcion:this.state.descripcion,
            genero:this.state.genero,
            disponible:this.state.disponible,
        };

        axios
            .put("http://localhost:4000/books/update-book/" + this.props.match.params.id,
                 studentObject)
            .then((res) => {
                console.log(res.data);
                console.log("Libro actualizado con éxito!");
            this.props.history.push("/book-list");
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render(){
        return(
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>

                    <Form.Group controlId="Iduser">
                        <Form.Label> Iduser </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.iduser}
                            onChange={this.onChangeBookIduser} />
                    </Form.Group>

                    <Form.Group controlId="Titulo">
                        <Form.Label> Titulo </Form.Label>
                        <Form.Control 
                            type="apellido"
                            value={this.state.titulo}
                            onChange={this.onChangeBookTitlulo}/>
                    </Form.Group>

                    <Form.Group controlId="Editorial">
                        <Form.Label> Editorial </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.editorial}
                            onChange={this.onChangeBookEditorial}/>
                    </Form.Group>

                    <Form.Group controlId="Eecha_edicion">
                        <Form.Label> Fecha_edicion </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.fecha_edicion}
                            onChange={this.onChangeBookFechaedicion}/>
                    </Form.Group>

                    <Form.Group controlId="Paginas">
                        <Form.Label> Paginas </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.paginas}
                            onChange={this.onChangeBookPaginas}/>
                    </Form.Group>

                    <Form.Group controlId="Autor">
                        <Form.Label> Autor </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.autor}
                            onChange={this.onChangeBookAutor}/>
                    </Form.Group>

                    <Form.Group controlId="Estado">
                        <Form.Label> Estado </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.estado}
                            onChange={this.onChangeBookEstado}/>
                    </Form.Group>

                    <Form.Group controlId="Caratula">
                        <Form.Label> Caratula </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.caratula}
                            onChange={this.onChangeBookCaratula}/>
                    </Form.Group>

                    <Form.Group controlId="Descripcion">
                        <Form.Label> Descripcion </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.descripcion}
                            onChange={this.onChangeBookDescripcion}/>
                    </Form.Group>

                    <Form.Group controlId="Genero">
                        <Form.Label> Genero </Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.genero}
                            onChange={this.onChangeBookGenero}/>
                    </Form.Group>

                    <Form.Group controlId="Disponible">
                        <Form.Label> Disponible </Form.Label>
                        <Form.Control 
                            type="Boolean"
                            value={this.state.disponible}
                            onChange={this.onChangeBookDisponible}/>
                    </Form.Group>

                    <br/>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        Actualizar usuario
                    </Button>
                </Form>
            </div>
        );
         
    }
}