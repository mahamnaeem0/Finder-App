import React from "react";
import'./UserItem.css';

const UserItem = (props) => {
    
        const { login, html_url, avatar_url} = props.users;
        
        return(
            <div className="user">
                <img src={avatar_url} alt="Profile" />
                <h2>{login}</h2>
                <a href={html_url}>Profile</a>

            </div>
        );
    }


export default UserItem;