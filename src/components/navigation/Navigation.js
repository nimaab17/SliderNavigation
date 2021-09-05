import NavbarLinks from './NavbarLinks'
import classes from './Navigation.module.css'
import { Link } from 'react-router-dom'

function Navigation (props) {
  
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__link}>
            {props.links.map(item => <NavbarLinks key={item.id} image={item.image} number={item.id}  title={item.title} />)} 
            </div>
            
            <div className={classes.navbar__btn}>
            <Link to='/news'><button className={classes.snip0059}>NEWS<i class="ion-clipboard"></i></button></Link>
                <Link to='/about'><button className={classes.snip0059}>ABOUT US<i class="ion-stats-bars"></i></button></Link>
                <Link to='/champions'><button className={classes.snip0059}>CHAMPIONS<i class="ion-person-stalker"></i></button></Link>
                <Link to='/constractors'><button className={classes.snip0059}>CONSTRACTOR<i class="ion-person-stalker"></i></button></Link>
                <Link to='/drivers'><button className={classes.snip0059}>DRIVERS<i class="ion-person-stalker"></i></button></Link>

            </div>
        </div>
    )
}

export default Navigation;