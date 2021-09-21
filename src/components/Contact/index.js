import React from 'react';

class Form extends React.Component {}



handleChange (event) {
    const name = event.target.name
    const type = event.target.type
    const value = type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
        [name]: value
    })
}

handleSubmit (event) {
    e.preventdefault()
    const data = JSON.stringify(this.state)
    this.setState({
        nom: '',
        prenom: '',
        email: ''
    })
}

form = () => {
    return 
      <form className="contact-form">
         <field name="nom" value={this.state.name} onChange={this.handleChange}>Nom</field>
         <field name="prenom" value={this.state.surname} onChange={this.handleChange}>Prémom</field>
         <field name="courriel" value={this.state.courriel} onChange={this.handleChange}>Courriel</field>
         <div className ="form-group">   
         <button class ="btn btn-primary">Envoyer</button>
         </div>
         {JSON.stringify(this.state)}
      </form>
};




export default form;