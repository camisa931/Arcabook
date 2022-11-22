import React, {Component} from "react"; /*component es una clase de react*/

import Background from './Landingpage/Background';

export default class CreateStudent extends Component{ //En este componente se va a crear un formulario

    render(){
        return (
            <div>
                <Background />
            </div>
        );
    }
}