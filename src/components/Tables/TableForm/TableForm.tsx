import * as React from 'react'
import {Form, Field, reduxForm, InjectedFormProps} from 'redux-form';
import './TableForm.scss';
import { Action } from '../../../ReduxStoreHandlers/actionFactory';

const TABLE_FORM_NAME = 'TABLE_FORM';

interface ITableFormProps extends React.Props<any>{
  handleSubmit: any;
}

class TableForm extends React.Component {

  renderFormInput = (name: string, type: string) => {
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
        <div className={"root"}>        
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