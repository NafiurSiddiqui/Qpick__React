import Button from '../../UI/Button';
import Card from '../../UI/Card';
import PopUpBox from '../../UI/PopUpBox';

function GoalsPopUpBox() {
 const getColor = () => {
  let colorPicker = document.getElementById('assignColor');
  console.log(colorPicker.value);
 };

 return (
  <PopUpBox className="modal_input">
   <section className="modal_input_container">
    <Card className="modal_input-goals">
     <label htmlFor="goals">Goals</label>
     <input
      type="text"
      id="goals"
      placeholder="Keep it short and to the point"
      className="modal_input-goals-goals"
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
      />
     </div>
     <div>
      <label htmlFor="budget">Budget</label>
      <input
       type="number"
       id="budget"
       className="modal_input-goals-time-limit"
      />
     </div>
    </Card>
   </section>
   <section className="modal-input-bottom">
    <div className="assign-color">
     <label htmlFor="color">Assign color</label>
     <input type="color" id="assignColor" onChange={getColor} />
    </div>

    <Button type="submit" className="modal-goals_button">
     Save
    </Button>
   </section>
  </PopUpBox>
 );
}
export default GoalsPopUpBox;
