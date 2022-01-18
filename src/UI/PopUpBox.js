import { Fragment } from 'react';
import Card from './Card';

const Backdrop = (props) => {
 return <section className="pop-up-box__backdrop">{props.children}</section>;
};

const BoxModal = (props) => {
 const classes = 'pop-up-box__modal ' + props.className;
 return <div className={classes}>{props.children}</div>;
};

function PopUpBox(props) {
 return (
  <Fragment>
   <Backdrop className="Backdrop"></Backdrop>
   <Card className={props.className}>
    <BoxModal>
     <form className="modal-form">{props.children}</form>
    </BoxModal>
   </Card>
  </Fragment>
 );
}
export default PopUpBox;
