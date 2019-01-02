import React, { Component } from 'react'
import {Form, Field, reduxForm} from 'redux-form';

const TABLE_FORM_NAME = 'TABLE_FORM';

class TableForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Field name="date" component="input" type="text" />
        <Field name="name" component="input" type="text" />
        <Field name="address" component="input" type="text" />
        <Field name="taxID" component="input" type="text" />
        <Field name="originID" component="input" type="text" />
        <Field name="HLF" component="input" type="text" />
        <Field name="weightInKilograms" component="input" type="text" />
      </Form>
    )
  }
}

export default reduxForm({
    form: TABLE_FORM_NAME
})(TableForm)
