function DisplayPrimary(props) {
 const classes = 'display-primary ' + props.className;
 return (
  <section className={classes}>
   <header className={props.className}>
    <h1 className="display-primary-header">{props.header}</h1>
   </header>
   <nav className={props.className}>{props.children}</nav>
   <main className={props.className}>{props.children2}</main>
   <footer className={props.className}>{props.children3}</footer>
  </section>
 );
}

export default DisplayPrimary;
