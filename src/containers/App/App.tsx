import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppForm from '../../components/Forms/AppForm';
import sendServer from '../../actions/appActions'

// Container
class App extends Component<any, any> {

    onClick = (e: any, data: any) => {
        e.preventDefault();
        this.props.createName(data)
    }

    onChangeName = ({ name }: any) => {
        
    }

    render() {
        return (
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        Redux Form
                    </div>
                    <div className="card-body">
                        <div className="card-title">Formulário</div>
                        <AppForm onClick={this.onClick} 
                                 onChange={this.onChangeName}/>
                    </div>
                    <div className="card-footer">
                        <p>Footer</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        initialValues: state.name.data
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        createName: (data: any) => dispatch(sendServer(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
