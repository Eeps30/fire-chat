import React, {Component} from 'react';
import { sendNewMessage } from '../actions';
import { connect } from 'react-redux';

class InputMessage extends Component {
    constructor(props){
        super(props);

        this.state = {
            message: ''
        }
    }

    handleSendMessage(e){
        e.preventDefault();

        console.log('Message To Send: ', this.state.message);

        this.props.sendNewMessage('Fred', this.state.message);

        this.setState({
            message: ''
        })
    }

    render(){
        return (
            <form className="row input-message" onSubmit={this.handleSendMessage.bind(this)}>
                <div className="col s10">
                    <input type="text" className="col s10" value={this.state.message} onChange={e => this.setState({ message: e.target.value})}/>
                </div>
                <div className="col s2">
                    <button className="btn right">Send It</button>
                </div>
            </form>
        )
    }
}

export default connect(null, { sendNewMessage })(InputMessage);