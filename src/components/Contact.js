import React from 'react';
import './Contact.css'
import PropTypes from 'prop-types';

function Contact(props){
    return(
        <div className="Contact">
            <img className="avatar" src={props.avatar}/>
            <div>
                <h2 className="name">{props.name}</h2>
                <div className="status">
                    <div className={props.online ? "status-online":"status-offline"}></div>
                    <p>{props.online ? "Online":"Offline"}</p>
                </div>
            </div>
        </div>
    );
}


Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online : PropTypes.bool
};

export default Contact;