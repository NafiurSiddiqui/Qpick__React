function FontAwesomeIcon(props) {
 const classes = 'fontAwesome ' + props.className;
 return <i icon={props.iconName} className={classes}></i>;
}
export default FontAwesomeIcon;
