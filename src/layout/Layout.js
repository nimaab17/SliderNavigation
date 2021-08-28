import classes from './Layout.module.css'
import MainNavigation from '../page/MainNav'

function Layout() {
 



    return (
        <div className={classes.main}>
         
          <div className={classes.navigation}>
            <MainNavigation />
           
          </div>
            
        </div>
    );
}

export default Layout;