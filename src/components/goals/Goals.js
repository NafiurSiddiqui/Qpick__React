import Card from '../../UI/Card';
import DisplayPrimary from '../../UI/Display_primary';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import FontAwesomeIcon from '../../UI/FontAwesomeIcon';
import Button from '../../UI/Button';
import React from 'react';
import CardSort from '../../UI/CardSort';

function Goals() {
 return (
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

   <Card className="goals-list-container"></Card>

   <Card className="goals-footer">
    <div className="goals-footer_btn-edits">
     <span className="btn-add-goals">+</span>
     <FontAwesomeIcon className="fa fa-edit" />
    </div>

    <Button className="btn-update-savings">Update Savings</Button>
   </Card>
  </DisplayPrimary>
 );
}
export default Goals;
