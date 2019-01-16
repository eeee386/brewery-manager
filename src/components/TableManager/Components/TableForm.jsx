import React, { Component } from 'react'
import {Form, Field, reduxForm} from 'redux-form';
import s from './TableForm';

const TABLE_FORM_NAME = 'TABLE_FORM';

class TableForm extends Component {

  renderFormInput = (name, type) => {
    return (
      <div>
        <label>{name}</label>
        <input type={type} />
      </div>
    )
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <div className={s.root}>        
          <Field name="date" component={() => this.renderFormInput("Dátum", "text")} />
          <Field name="name" component={() => this.renderFormInput("Név", "text")} />
          <Field name="address" component={() => this.renderFormInput("Lakcím", "text")} />
          <Field name="taxID" component={() => this.renderFormInput("AdóSzám", "text")} />
          <Field name="originID" component={() => this.renderFormInput("Származási Igazolvány Szám", "text")} />
          <Field name="HLF" component={() => this.renderFormInput("Hektoliterfok", "text")} />
          <Field name="weightInKilograms" component={() => this.renderFormInput("Tömeg", "text")} />
          <button onClick={this.props.handleSubmit}>Küldés</button>
        </div>
      </Form>
    )
  }
}

export default reduxForm({
    form: TABLE_FORM_NAME
})(TableForm)
