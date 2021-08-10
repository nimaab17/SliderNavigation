import NavbarLinks from './NavbarLinks'
import classes from './Navigation.module.css'


function Navigation (props) {
  
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__link}>
            {props.links.map(item => <NavbarLinks key={item.id} image={item.image} number={item.id}  title={item.title} />)} 
            </div>
        </div>
    )
}

export default Navigation;