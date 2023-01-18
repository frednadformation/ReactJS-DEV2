import React, { Component } from 'react'
import './styles/myStyle.css';

class Newsletter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        pseudo: '',
         nom: '',
         prenom: '',
         email: ''
      }
    }
    handlePseudoChange = (event) => {
        this.setState({ pseudo: event.target.value});
        console.log(event.target);
        if(event.target.value.length <= 3){
            event.target.className = "error";
            event.target.append("Some text");
        }
        else{
            event.target.className = "valid";
        }
    }

    handleNomChange = (event) => {
        this.setState({ nom: event.target.value});
        console.log(this.state.nom);
    }
    
    handlePrenomChange = (event) => {
        this.setState({ prenom: event.target.value});
        console.log(event.target.value);
    }
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value});
        console.log(event.target.value);
    }

    handleSubmit = (event) => {
        alert(`Merci, ${this.state.nom} ${this.state.prenom} d'avoir pris contact avec nous. 
            Nous reviendrons vers vous à ce email :  ${this.state.email}`)
        event.preventDefault();
    }

  render() {
    const {pseudo, nom, prenom, email} = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
				<div>
					<label>Pseudo </label>
					<input
						type="text"
						value={pseudo} onChange ={this.handlePseudoChange}
					/>
				</div>
				<div>
					<label>nom </label>
					<input
						type="text"
						value={nom} onChange ={this.handleNomChange}
					/>
				</div>
				<div>
					<label>prenom</label>
					<input type="text"
						value={prenom} onChange ={this.handlePrenomChange}
					/>
				</div>
				<div>
                <label>email</label>
					<input type="email"
						value={email} onChange ={this.handleEmailChange}
					/>
				</div>
				<button className='green' type="submit">Submit</button>
			</form>
    )
  }
}

export default Newsletter   