import React from 'react';

import './style.scss';

// class Form extends React.Component {

function Field ({name, value, onChange, children}){
    return <div className="form-group">
       <label htmlFor={name}>{children}</label>
       <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control"/>
       </div>

}

class ContactForm extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            nom:'',
            prenom:'',
            newsletter:false
        }
        this.handleChange = this.handleChange.bind(this)
    }


handleChange = (event) => {
    const name = event.target.name
    const type = event.target.type
    const value = type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({
        [name]: value
    })
}

handleSubmit = (event) => {
    event.preventdefault()
    const data = JSON.stringify(this.state)
    this.setState({
        nom: '',
        prenom: '',
        courriel: ''
    })
}

// generating a form getting values for the different fields 

render() {
    return (
      <form className="contact-form">
         <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
         <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prémom</Field>
         <Field name="courriel" value={this.state.courriel} onChange={this.handleChange}>Courriel</Field>
         <div className ="form-group">   
         <button class ="btn btn-primary">Envoyer</button>
         </div>
         {JSON.stringify(this.state)}
      </form>
    )}
};


export default ContactForm;