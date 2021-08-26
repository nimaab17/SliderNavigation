// import { Link } from 'react-router-dom'

import Navigation from '../components/navigation/Navigation';
import classes from './MainNav.module.css';
import Carousel from '../components/slider/Carousel';
import { CarouselImages,navbarItems } from "../data/mockData";

function MainNavigation () {
    
    return (
       <div>
            <div className={classes.navigation}>
                <div className={classes.navigation__links}>
                    <Navigation links={navbarItems} />
                    
                </div>
                <div className={classes.navigation__carosel}>
                    
                    <Carousel images={CarouselImages} />
                </div>
               
                
            </div>
       </div>
    );
}

export default MainNavigation;