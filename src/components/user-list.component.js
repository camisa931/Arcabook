import React, {Component} from "react"; /*component es una clase de react*/
import axios from "axios";
import Table from "react-bootstrap/Table";
import UserTableRow from "./UserTableRow";

export default class userList extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: [],
        };
    }

    componentDidMount(){
        axios
            .get("http://localhost:4000/users")
            .then((res) => {
                this.setState({
                    user: res.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    DataTable(){
        return this.state.user.map((res, i) => {
            return <UserTableRow obj={res} key={i}/>;
        });
    }

    render(){
        return(
            <div>
                <Table striped bordered hover variant="dark">
                    <thead >
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Password</th>
                            <th>Admin</th>
                            <th>Estado</th>
                            <th>Avatar</th>
                            <th>Descripción</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>{this.DataTable()}</tbody>
                </Table>
            </div>
        );
    }
    
}