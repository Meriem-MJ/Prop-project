import React from 'react';
import PropTypes from "prop-types";

const Profile = (props) => {
    const {fullName, bio, profession} = props;
    function handleName(){
        alert(fullName)
      }
    return (
        <div>
            <button onClick = {handleName}>Click Me!</button>
            <h1>Hi! My name is {fullName} and {bio}. Currently, I'm working as a {profession} in an import/export company.</h1>
            {props.children}
        </div>
    )
}
Profile.defaultProps={
    fullName: "Meriem Jebara",
    bio :"I'm a student in GoMyCode",
    profession :"Logistic Assistante"
};
Profile.propTypes={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}

export default Profile
