import classes from './Layout.module.css'
import MainNavigation from '../page/MainNav'
import { useLocation } from 'react-router-dom';

function Layout(props) {
  const location = useLocation()

    return (
        <div className={classes.main}>
          <div className={classes.navigation}>
             {location.pathname === '/' ?<MainNavigation />:props.children}
          </div>
        </div>
    );
}

export default Layout;