import { Link } from 'react-router-dom';


const HomePageView = () => {
    return (
      <div>
        <h6>Final Project</h6>
        <Link to={'/tasks'} > All Courses </Link>
      </div>
    );    
  }

  export default HomePageView;
