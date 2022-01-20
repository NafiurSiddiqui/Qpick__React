import { Fragment } from 'react';
import Goals from './components/goals/Goals';

import './sass/main.scss';

function App() {
 const addGoalsHandler = (expense) => {
  console.log('From App.js');
  console.log(expense);
 };

 return (
  <Fragment>
   <Goals onSaveGoals={addGoalsHandler} />;
  </Fragment>
 );
}

export default App;
