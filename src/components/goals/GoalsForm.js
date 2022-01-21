import Button from '../../UI/Button';
import Card from '../../UI/Card';
import PopUpBox from '../../UI/PopUpBox';
import { useState } from 'react';

// This is where new goals list is made

function GoalsForm(props) {
 // state management for userInput
 const [goalsTitle, setGoalsTitle] = useState('');

 const [goalsTimeLimit, setGoalsTimeLimit] = useState('');
 const [goalsBudget, setGoalsBudget] = useState('');
 const [goalsBudgetSaved, setGoalsBudgetSaved] = useState('');
 const [goalsChart, setGoalsChart] = useState('');

 const [goalsColor, setGoalsColor] = useState('');

 //  get the values
 const goalsHandler = (e) => {
  setGoalsTitle(e.target.value);
 };

 const goalsTimeLimitHandler = (e) => {
  setGoalsTimeLimit(e.target.value);
 };
 const goalsBudgetHandler = (e) => {
  setGoalsBudget(e.target.value);
 };
 const goalsBudgetSavedHandler = (e) => {
  setGoalsBudgetSaved(e.target.value);
 };
 const goalsChartHandler = (e) => {
  setGoalsChart(e.target.value);
 };
 const goalsColorHandler = (e) => {
  setGoalsColor(e.target.value);
 };

 //form handler
 const submitHandler = (e) => {
  //   prevent default
  e.preventDefault();

  //store incoming data
  const newGoals = {
   title: goalsTitle,
   timeLimit: new Date(goalsTimeLimit),
   budget: goalsBudget,
   budgetSaved: goalsBudgetSaved,
   chart: goalsChart,
   goalsColor: goalsColor,
  };
  console.log(newGoals);
  //call goalsList prop fucntion here for gathering data
  props.onSaveGoalsData(newGoals);
  //reset input
  setGoalsTitle('');
  setGoalsTimeLimit('');
  setGoalsBudget('');
  setGoalsColor('');
 };

 return (
  <PopUpBox
   className="modal_input"
   onClose={props.onClose}
   onSubmit={submitHandler}
  >
   <h1 className="modal_input-header">Set your budget for spcific goals</h1>
   <section className="modal_input_container">
    <Card className="modal_input-goals">
     <label htmlFor="goals">Goals</label>
     <input
      type="text"
      id="goals"
      placeholder="Keep it short and to the point"
      className="modal_input-goals-goals"
      value={goalsTitle}
      onChange={goalsHandler}
     />
    </Card>

    <Card className="modal_input-goals_date-and-budget">
     <div>
      <label htmlFor="timeLimit">Time limit</label>
      <input
       type="date"
       id="date"
       className="modal_input-goals-time-limit"
       name="goals-time-limit"
       min="2022-01-01"
       max="2028-12-31"
       value={goalsTimeLimit}
       onChange={goalsTimeLimitHandler}
      />
     </div>
     <div>
      <label htmlFor="budget">Budget</label>
      <input
       type="number"
       id="budget"
       className="modal_input-goals-time-limit"
       min="0.01"
       step="0.01"
       value={goalsBudget}
       onChange={goalsBudgetHandler}
      />
     </div>
    </Card>
   </section>
   <section className="modal-input-bottom">
    <div className="assign-color">
     <label htmlFor="color">Assign color</label>
     <input type="color" id="assignColor" onChange={goalsColorHandler} />
    </div>

    <Button type="submit" className="modal-goals_button">
     Save
    </Button>
   </section>
  </PopUpBox>
 );
}
export default GoalsForm;
