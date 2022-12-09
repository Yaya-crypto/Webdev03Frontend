import { Link } from 'react-router-dom'

const AllTasksView = (props) => {
    let { tasks } = props;

    if (!tasks.length) {
        return (
            <div>
                <p> There are no tasks. </p>
            </div>
        );
    }

    return (
        <div>
            {tasks.map((task) => {
                let desc = task.description;
                return (
                    <div key={task.id}>
                    <Link to={`/tasks/${task.id}`}>
                        <h1> {desc} </h1>
                    </Link>
                    </div>
                );
            }
        )}
        </div>
    );
};

export default AllTasksView;