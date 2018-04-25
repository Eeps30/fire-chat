import React, {Component} from 'react';
import db from '../firebase';
import { connect } from 'react-redux';
import { updateChat } from '../actions';
import '../assets/css/chat.css';
import InputMessage from './input-message';

class Chat extends Component {
    componentDidMount(){
        db.ref('/chat').on('value', snapshot => {
            this.props.updateChat(snapshot.val());
        })
    }

    componentDidUpdate(){
        this.refs.chatBottom.scrollIntoView();
    }

    scrollChat(){
        this.refs.chatBottom.scrollIntoView();
    }

    render(){
        console.log('Chat Log: ', this.props.log);

        const messages = [];

        for(let [k, v] of Object.entries(this.props.log)){
            const message = (
                <p key={k}>
                    <b>{v.author}</b>
                    <span>{v.message}</span>
                </p>
            )

            messages.push(message);
        }

        console.log('REF: ', this.refs)

        return (
            <div className="container chat">
                <h1 className="center">Chat Room</h1>
                <div className="messages">
                    {messages}
                    <div ref="chatBottom" style={{float: "left", clear: "both"}}></div>
                </div>
                <InputMessage/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        log: state.chat.chatLog
    }
}

export default connect(mapStateToProps, {updateChat})(Chat);