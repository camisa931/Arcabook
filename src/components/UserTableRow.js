import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import Button from "react-bootstrap/Button";

export default class UserTableRow extends Component{
    constructor(props){
        super(props); //esta es la primera linea que siempre debe llevar un constructor
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(){
        axios
            .delete("http://localhost:4000/users/delete-user/" + this.props.obj._id)
            .then((res) => {
                console.log("Usuario eliminiado con tristeza");
                window.location.href = "/user-list";
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render(){
        return(
            <tr>
                <td>{this.props.obj.nombre}</td>
                <td>{this.props.obj.apellido}</td>
                <td>{this.props.obj.correo}</td>
                <td>{this.props.obj.password}</td>
                <td>{this.props.obj.admin?'Si':'No'}</td>
                <td>{this.props.obj.estado}</td>
                <td>{this.props.obj.avatar}</td>
                <td>{this.props.obj.descripcion}</td>
                <td>
                    <Link
                        className="edit-link"
                        path={"product/:id"}
                        to={"/edit-user/" + this.props.obj._id}
                    >
                        Editar
                    </Link>
                    <Button onClick={this.deleteUser} size="sm" variant="danger">
                        Borrar
                    </Button>
                </td>
            </tr>
        );
    }
}