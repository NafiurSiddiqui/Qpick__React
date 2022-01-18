import { Fragment } from 'react';
import Goals from './components/goals/Goals';
import GoalsPopUpBox from './components/goals/GoalsPopUpBox';
import './sass/main.scss';

function App() {
 return (
  <Fragment>
   <GoalsPopUpBox></GoalsPopUpBox>
   <Goals />;
  </Fragment>
 );
}

export default App;
