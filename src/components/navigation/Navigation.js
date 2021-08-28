import NavbarLinks from './NavbarLinks'
import classes from './Navigation.module.css'


function Navigation (props) {
  
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__link}>
            {props.links.map(item => <NavbarLinks key={item.id} image={item.image} number={item.id}  title={item.title} />)} 
            </div>
            <div className={classes.navbar__btn}>
                <button className={classes.snip0059}>HOME<i class="ion-clipboard"></i></button>
                <button className={classes.snip0059}>ABOUT US<i class="ion-stats-bars"></i></button>
                <button className={classes.snip0059}>CHAMPIONS<i class="ion-person-stalker"></i></button>
                <button className={classes.snip0059}>CONSTRACTOR<i class="ion-person-stalker"></i></button>
                <button className={classes.snip0059}>DRIVERS<i class="ion-person-stalker"></i></button>

            </div>
        </div>
    )
}

export default Navigation;