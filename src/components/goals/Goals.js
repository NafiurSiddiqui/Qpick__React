import Card from '../../UI/Card';
import DisplayPrimary from '../../UI/Display_primary';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import FontAwesomeIcon from '../../UI/FontAwesomeIcon';
import Button from '../../UI/Button';

function Goals() {
 return (
  <DisplayPrimary header="Goals" className="goals">
   <div>
    <Card className="goals-sort">
     <h3 className="goals-sort__header">Sort by- </h3>
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
    </Card>
   </div>

   <Card className="goals-footer">
    <span className="btn-add-goals">+</span>
    <FontAwesomeIcon className="fa fa-edit" />

    <Button className="btn-update-savings">Update Savings</Button>
   </Card>
  </DisplayPrimary>
 );
}
export default Goals;
