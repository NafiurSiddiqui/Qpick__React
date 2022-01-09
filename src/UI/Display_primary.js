function DisplayPrimary(props) {
 const classes = 'display-primary ' + props.className;
 return (
  <section className={classes}>
   <header className={props.className}>
    <h1>{props.header}</h1>
   </header>
   <main>{props.children}</main>

   <footer className={props.className}>{props.children2}</footer>
  </section>
 );
}

export default DisplayPrimary;
