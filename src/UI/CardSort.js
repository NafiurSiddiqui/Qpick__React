import Card from './Card';

function CardSort(props) {
 const classes = 'card-sort ' + props.className;
 return (
  <Card className={classes}>
   <h3 className="card-sort__header">Sort by- </h3>
   <div className="card-sort__btn-container">{props.children}</div>
  </Card>
 );
}
export default CardSort;
