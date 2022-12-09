import './App.css';

import { Switch, Route } from 'react-router-dom';

import {
  HomePageContainer,
  TaskContainer,
  AllEmployeesContainer,
  AllTasksContainer,
  EditTaskContainer
} from './components/containers';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/employees" component={AllEmployeesContainer} />
        <Route exact path="/tasks" component={AllTasksContainer} />
        <Route exact path="/tasks/:id" component={TaskContainer} />
        <Route exact path="/edittasks/:id" component={EditTaskContainer} />
      </Switch>
    </div>
  )
}

export default App;
