import React, { Component } from 'react';
import {InjectedFormProps, Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import nameAction from '../../actions/formAppActions';
import { Button } from 'reactstrap';

const warn = (values: any) => {
    const warnings: any = {}
    const { name } = values;

    if (name && name.toString().length <= 2) {
        warnings.name = 'To Short';
    }

    return warnings;
}

const validate = (values: any) => {
    const errors: any = {}
    const { name } = values;
    if (!name) {
        errors.name = 'Required';
    }

    return errors;
}

const renderField = ({ input, label, type, meta: { touched, error, warning }}: any) => 
    (
        <div className="form-group">
            <label htmlFor="">{ label }</label>
            <input {...input} placeholder={label} type={type} className="form-control"/>
        {touched && (error && <span className="text-danger">{error}</span>) ||
                    (warning && <span className="text-warning">{warning}</span>)}
        </div>
    )

class AppForm extends Component<InjectedFormProps<any> & any> {

    componentWillMount() {
        this.props.fetchInicial();
    }

    render() {
        const { onClick, onChangeName } = this.props;
        return(
        <form>
            <div className="form-group">
                <label htmlFor="name">Enter your name</label>
                <Field name="name"
                       placeholder="Enter your name"
                       type="text"
                       component={ renderField }
                       onChange={onChangeName}
                       className="form-control"
                       />
            </div>
            <div className="form-group">
                <Button type="button"
                        outline color="primary"
                        onClick={ (e: any) => onClick(e, this.props.initialValues) }>
                    Send
                </Button>
            </div>
        </form>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        initialValues: state.name.data
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchInicial: () => dispatch(nameAction())
    }
}


export default connect(
    mapStateToProps, mapDispatchToProps
)(reduxForm<any, any>({
    form: 'AppForm',
    enableReinitialize: true,
    validate: validate,
    warn: warn
})(AppForm));
