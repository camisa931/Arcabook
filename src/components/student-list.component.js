import React, {Component} from "react"; /*component es una clase de react*/
import axios from "axios";
import Table from "react-bootstrap/Table";
import StudentTableRow from "./StudentTableRow";

export default class studentList extends Component{
    constructor(props){
        super(props);
        this.state = {
            student: [],
        };
    }

    componentDidMount(){
        axios
            .get("http://localhost:4000/students")
            .then((res) => {
                this.setState({
                    student: res.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    DataTable(){
        return this.state.student.map((res, i) => {
            return <StudentTableRow obj={res} key={i}/>;
        });
    }

    render(){
        return(
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo electrónico</th>
                            <th>Código</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>{this.DataTable()}</tbody>
                </Table>
            </div>
        );
    }
    
}