import React from 'react';
import PropTypes from "prop-types";
import { findByLabelText } from '@testing-library/dom';

const Profile = (props) => {
    const {handleName, fullName, bio, profession} = props;
    const styleObject={textAlign: 'center'}
   
    return (
            <div className="container" style={styleObject}>
                <div className="container2">
                <button onClick = {()=>handleName(fullName)}>Hello! Click Me!</button>
                {props.children}
                </div>
                <div>
                <h1>Hi! My name is {fullName} and {bio}. Currently, I'm working as a {profession} in an import/export company.</h1>
                </div>
                
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
