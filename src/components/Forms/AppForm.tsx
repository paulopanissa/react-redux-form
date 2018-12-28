import React, { Component } from 'react';
import {InjectedFormProps, Field, reduxForm} from "redux-form";
import { Button } from "reactstrap";

// const AppForm: any = (props: InjectedFormProps) => {
//     console.log(props);
//     return (
//         <form>
//             <div className="form-group">
//                 <label htmlFor="name">Enter your name</label>
//                 <Field name="name"
//                        placeholder="Enter your name"
//                        type="text"
//                        component="input"
//                         className="form-control"/>
//             </div>
//             <div className="form-group">
//                 <Button outline color="primary">
//                     Send
//                 </Button>
//             </div>
//         </form>
//     )
// }

class AppForm extends Component<InjectedFormProps<any> & any> {
    render() {
        console.log(this.props)
        return(
        <form>
            <div className="form-group">
                <label htmlFor="name">Enter your name</label>
                <Field name="name"
                       placeholder="Enter your name"
                       type="text"
                       component="input"
                        className="form-control"/>
            </div>
            <div className="form-group">
                <Button type="button" outline color="primary">
                    Send
                </Button>
            </div>
        </form>
        )
    }
}

export default reduxForm<any, any>({
    form: 'AppForm'
})(AppForm)