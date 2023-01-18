import React, {Component} from "react";
class Message extends Component {
    constructor(){
        super();
        this.state = {
            message :"Welcome les developpeurs !",
            prenom: "Calvin"
        };
    }

    changeMessage(){
        this.setState({
            message : "Thank you for Subscribing !"
        })
    }

    render() {
        return <div>
                <h1>{this.state.message}</h1>
                <h2>{this.state.prenom}</h2>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
    }
}

export default Message;