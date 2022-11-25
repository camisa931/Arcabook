import React, {Component} from "react"; /*component es una clase de react*/
import axios from "axios";
import Table from "react-bootstrap/Table";
import BookTableRow from "./BookTableRow";

export default class bookList extends Component{
    constructor(props){
        super(props);
        this.state = {
            book: [],
        };
    }

    componentDidMount(){
        axios
            .get("http://localhost:4000/books")
            .then((res) => {
                this.setState({
                    book: res.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    DataTable(){
        return this.state.book.map((res, i) => {
            return <BookTableRow obj={res} key={i}/>;
        });
    }

    render(){
        return(
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Iduser</th>
                            <th>Titulo</th>
                            <th>Editorial</th>
                            <th>Fecha_edicion</th>
                            <th>Paginas</th>
                            <th>Autor</th>
                            <th>Estado</th>
                            <th>Caratula</th>
                            <th>Descripcion</th>
                            <th>Genero</th>
                            <th>Disponible</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>{this.DataTable()}</tbody>
                </Table>
            </div>
        );
    }
    
}
