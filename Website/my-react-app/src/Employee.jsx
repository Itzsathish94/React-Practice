import PropTypes from 'prop-types'

function Employee(props){
    return(
        <div className="Employee">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Employee.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool
}

Employee.defaultProps = {
    name:"guest",
    age:0,
    isStudent:"No"
}

export default Employee