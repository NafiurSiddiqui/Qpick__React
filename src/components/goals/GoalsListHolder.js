import Card from '../../UI/Card';
import GoalsList from './GoalsList';

function GoalsListHolder(props) {
 return (
  <Card className="goals-list-card">
   <ul className="goals-list-list-container">
    {props.goalsData.map((goalsData) => (
     <GoalsList
      key={goalsData.id}
      title={goalsData.title}
      createdAt={goalsData.createdAt}
      timeLimit={goalsData.timeLimite}
      budget={goalsData.budget}
      budgetSaved={goalsData.budgetSaved}
      chart={goalsData.chart}
     />
    ))}
   </ul>
  </Card>
 );
}
export default GoalsListHolder;
