import React from 'react';
import './Contact.css'

function Contact(){
    return(
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/women/83.jpg"/>
            <div>
                 <h2 className="name">Mabel Perkins</h2>
                <div className="status">
                    <div className="status-online"></div>
                    <p>Online</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;