import Card from '../../UI/Card';

function GoalsList(props) {
 return (
  <>
   <li className="goals-list-list">
    <p className="goalds-list-list_headers">{props.title}</p>
    <p className="goalds-list-list_headers">{props.createdAt}</p>
    <p className="goalds-list-list_headers">{props.timeLimit}</p>
    <p className="goalds-list-list_headers">{props.budget}</p>
    <p className="goalds-list-list_headers">{props.budgetSaved}</p>
    <p className="goalds-list-list_headers">Chart</p>
   </li>
  </>
 );
}
export default GoalsList;
