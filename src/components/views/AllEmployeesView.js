import PropTypes from "prop-types";


const AllEmployeeView = (props) => {
  if (!props.allEmployees.length) {
    return <div>There are no employees.</div>;
  }

  return (
    <div>
      {props.allEmployees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div>
            <h1>{name}</h1>
          <p>{employee.department}</p>
        </div>
        );

      })}
    </div>
  );
};

AllEmployeeView.propTypes = {
    allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeeView;