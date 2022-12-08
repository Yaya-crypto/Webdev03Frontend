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
                let title = task.title;
                return (
                    <div key={task.id}>
                    <Link to={`/course/${course.id}`}>
                        <h1> {title} </h1>
                    </Link>
                    </div>
                );
            }
        )}
        </div>
    );
};

export default AllTasksView;