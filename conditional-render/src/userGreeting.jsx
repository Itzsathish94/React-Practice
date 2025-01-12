import PropTypes from 'prop-types';

function UserGreeting({isLoggedIn=false,userName="Guest"}){

    const welcomeMessage = <h2 className="welcome-message"> Welcome, {userName} </h2>
    const loginPrompt = <h2 className="login-prompt"> Please, Log in to continue </h2>

    return (isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    userName : PropTypes.string
}

export default UserGreeting