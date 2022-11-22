
//
import React, {Component} from "react"; /*component es una clase de react*/
import Form from "react-bootstrap/Form"//etiqueta para formularios
import Button from "react-bootstrap/Button";
import axios from "axios";


export default class CreateBook extends Component{ //En este componente se va a crear un formulario

    constructor(props){
        super(props); // esta linea siempre va de primeras
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

    onChangeBookIduser(e){// con la sola letra e se accedio a la clase event
        this.setState({iduser:e.target.value}); //setstate no se usa dentro del constructor
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
            .post("http://localhost:4000/books/create-book", studentObject)
            .then((res) => console.log(res.data));  
            window.location.href = "/book-list";     
        this.setState({iduser:"",titulo:"",editorial:"",fecha_edicion:"",paginas:"",autor:"",estado:"",caratula:"",descripcion:"",genero:"",disponible:""});
    } 

    render(){
        return (
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
                            type="text"
                            value={this.state.disponible}
                            onChange={this.onChangeBookDisponible}/>
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
                        Ingresar Libro
                    </Button>
                </Form>
                <br/><br/><br/>
            </div>
        );
    }
}