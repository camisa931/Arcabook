import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import Button from "react-bootstrap/Button";

export default class BookTableRow extends Component{
    constructor(props){
        super(props); //esta es la primera linea que siempre debe llevar un constructor
        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook(){
        axios
            .delete("http://localhost:4000/books/delete-book/" + this.props.obj._id)
            .then((res) => {
                console.log("Libro eliminiado con tristeza");
                window.location.href = "/book-list";
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render(){
        return(
            <tr>
                <td>{this.props.obj.iduser}</td>
                <td>{this.props.obj.titulo}</td>
                <td>{this.props.obj.editorial}</td>
                <td>{this.props.obj.fecha_edicion}</td>
                <td>{this.props.obj.paginas}</td>
                <td>{this.props.obj.autor}</td>
                <td>{this.props.obj.estado}</td>
                <td>{this.props.obj.caratula}</td>
                <td>{this.props.obj.descripcion}</td>
                <td>{this.props.obj.genero}</td>
                <td>{this.props.obj.disponible?'Si':'No'}</td>
                <td>
                    <Link
                        className="edit-link"
                        path={"product/:id"}
                        to={"/edit-book/" + this.props.obj._id}
                    >
                        Editar
                    </Link>
                    <Button onClick={this.deleteBook} size="sm" variant="danger">
                        Borrar
                    </Button>
                </td>
            </tr>
        );
    }
}