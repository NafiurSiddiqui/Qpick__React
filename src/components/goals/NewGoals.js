import GoalsForm from './GoalsForm';

function NewGoals(props) {
 //get data to feed GoalsPopUpbox
 const saveGoalsData = (previousGoalsData) => {
  //getDate
  let currentDate = new Date();
  let dateTime = currentDate.toDateString();

  const newGoalsData = {
   ...previousGoalsData,
   id: Math.random().toString(),
   createdAt: dateTime,
  };
  console.log(newGoalsData);
  props.onAddGoals(newGoalsData);
  //   return newGoalsData;
 };
 return <GoalsForm onSaveGoalsData={saveGoalsData} onClose={props.onClose} />;
}
export default NewGoals;
