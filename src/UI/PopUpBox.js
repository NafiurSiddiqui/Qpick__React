import Card from './Card';

const Backdrop = (props) => {
 let classes = 'pop-up-box__backdrop ' + props.className;
 return (
  <section className={classes} onClick={props.onTap}>
   {props.children}
  </section>
 );
};

const BoxModal = (props) => {
 const classes = 'pop-up-box__modal ' + props.className;
 return <div className={classes}>{props.children}</div>;
};

function PopUpBox(props) {
 return (
  <>
   <Backdrop onTap={props.onClose}>
    <span className="backdrop-cross"> &#10006;</span>
   </Backdrop>
   <Card className={props.className}>
    <BoxModal>
     <form className="modal-form" onSubmit={props.onSubmit}>
      {props.children}
     </form>
    </BoxModal>
   </Card>
  </>
 );
}
export default PopUpBox;
