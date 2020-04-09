import React from 'react';
import './Contact.css'
import PropTypes from 'prop-types';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            online:this.props.online
        };
    }
    render(){
    return(
        <div className="Contact">
            <img className="avatar" src={this.props.avatar}/>
            <div>
                <h2 className="name">{this.props.name}</h2>
                <div className="status"
                onClick={event=>{
                    const isOnline=!this.state.online;
                    this.setState({online:isOnline});
                }}
                >
                    <div className={this.state.online ? "status-online":"status-offline"}></div>
                    <p>{this.state.online ? "Online":"Offline"}</p>
                </div>
            </div>
        </div>
    );
    }
}


Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online : PropTypes.bool
};

export default Contact;