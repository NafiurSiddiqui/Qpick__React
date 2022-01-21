import Card from '../../UI/Card';
import DisplaySecondary from '../../UI/Display_secondary';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import FontAwesomeIcon from '../../UI/FontAwesomeIcon';
import Button from '../../UI/Button';
import React, { useState } from 'react';
import CardSort from '../../UI/CardSort';
import GoalsListHolder from './GoalsListHolder';
import NewGoals from './NewGoals';

const goals = [
 {
  title: 'Buy a car',
  createdAt: 'fri Jan 20 2022',
  budget: '20000',
  goalsColor: '#fffeeaa',
  id: '0.123',
  timeLimit: ' 21 2022',
  budgetSaved: '',
  chart: '',
 },
];

function Goals(props) {
 //state for userGoals data
 const [goalsData, setgoalsData] = useState(goals);
 // state for modal
 const [showModal, setShowModal] = useState(false);

 //handling goalsData
 const addGoalsHandler = (goals) => {
  console.log('From Added Goals Data -');
  setgoalsData((prevState) => {
   return [goals, ...prevState];
  });
 };
 return (
  <div>
   {showModal ? (
    <NewGoals
     showModal={showModal}
     onClose={() => setShowModal(false)}
     onAddGoals={addGoalsHandler}
    />
   ) : null}
   <DisplaySecondary header="Goals" className="goals">
    <React.Fragment>
     <CardSort className="goals-sort">
      <div className="goals-sort__btn-container">
       <span className="btn-sort">
        <FontAwesomeIcon className="fa fa-caret-down" />
        Date
       </span>
       <span className="btn-sort">
        <FontAwesomeIcon className="fa fa-caret-down" />
        Budget
       </span>
       <span className="btn-sort">
        <FontAwesomeIcon className="fa fa-caret-down" />
        Progress
       </span>
      </div>
     </CardSort>
    </React.Fragment>
    <Card className="goals-list-container" onSaveGoals={addGoalsHandler}>
     <header className="goals-list-container-header">
      <p className="goals-list-container-header_title">Goals</p>
      <p className="goals-list-container-header_title">Created at</p>
      <p className="goals-list-container-header_title">Time limit</p>
      <p className="goals-list-container-header_title">budget</p>
      <p className="goals-list-container-header_title">budget saved</p>
      <p className="goals-list-container-header_title">Chart</p>
     </header>
     <GoalsListHolder goalsData={goalsData} />
     {/* <GoalsList /> */}
    </Card>
    <Card className="goals-footer">
     <div className="goals-footer_btn-edits">
      <span className="btn-add-goals" onClick={() => setShowModal(true)}>
       +
      </span>
      <FontAwesomeIcon className="fa fa-edit" />
     </div>

     <Button className="btn-update-savings">Update Savings</Button>
    </Card>
   </DisplaySecondary>
  </div>
 );
}
export default Goals;
