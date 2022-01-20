import Card from '../../UI/Card';
import DisplayPrimary from '../../UI/Display_secondary';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import FontAwesomeIcon from '../../UI/FontAwesomeIcon';
import Button from '../../UI/Button';
import React, { useState } from 'react';
import CardSort from '../../UI/CardSort';
import GoalsList from './GoalsList';
import GoalsPopUpBox from './GoalsPopUpBox';

function Goals(props) {
 // state for modal
 const [showModal, setShowModal] = useState(false);

 //get data from GoalsPopUpbox
 const saveGoalsDataHandler = (previousGoalsData) => {
  //getDate
  let currentDate = new Date();
  let dateTime = currentDate.toDateString();

  const newGoalsData = {
   ...previousGoalsData,
   id: Math.random().toString(),
   createdAt: dateTime,
  };
  console.log(newGoalsData);
  props.onSaveGoals(newGoalsData);
 };

 return (
  <div>
   {showModal ? (
    <GoalsPopUpBox
     showModal={showModal}
     onClose={() => setShowModal(false)}
     onSaveGoalsData={saveGoalsDataHandler}
    />
   ) : null}
   <DisplayPrimary header="Goals" className="goals">
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

    <Card className="goals-list-container">
     <header className="goals-list-container-header">
      <p className="goals-list-container-header_title">Goals</p>
      <p className="goals-list-container-header_title">Created at</p>
      <p className="goals-list-container-header_title">Time limit</p>
      <p className="goals-list-container-header_title">budget</p>
      <p className="goals-list-container-header_title">budget saved</p>
      <p className="goals-list-container-header_title">Chart</p>
     </header>

     <ul className="goals-list-list-container">
      <GoalsList />
     </ul>
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
   </DisplayPrimary>
  </div>
 );
}
export default Goals;
