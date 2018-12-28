import React, { Component } from 'react';
import AppForm from "../../components/Forms/AppForm";

// Container
class App extends Component {

    onClick = (e: any) => {
        console.log("Clicked in redux form")
    }

  render() {
    // @ts-ignore
      // @ts-ignore
      return (
        <div className="col">
            <div className="card">
                <div className="card-header">
                    Redux Form
                </div>
                <div className="card-body">
                    <div className="card-title">Formulário</div>
                    <AppForm onClick={ this.onClick }/>
                </div>
                <div className="card-footer">
                    <p>Footer</p>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
