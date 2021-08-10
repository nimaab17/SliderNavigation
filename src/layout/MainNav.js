// import { Link } from 'react-router-dom'
import Navigation from '../components/navigation/Navigation';
import classes from './MainNav.module.css';


function MainNavigation () {
    const navbarItems = [
        {
            id:0,
            title: 'Home',
            image: './img/alfa.png'
        },
        {
            id:1,
            title: 'Work',
            image: './img/alpine.png'
        },
        {
            id:2,
            title: 'About',
            image: './img/aston.png'
        },
        {
            id:3,
            title: 'Contact',
            image: './img/benz.png'
        }, {
            id:4,
            title: 'Contact',
            image: './img/ferrari.png'
        }, {
            id:5,
            title: 'Contact',
            image: './img/hass.png'
        }, {
            id:6,
            title: 'Contact',
            image: './img/maclaren.png'
        }, {
            id:7,
            title: 'Contact',
            image: './img/redbul.png'
        }, {
            id:8,
            title: 'Contact',
            image: './img/tauri.png'
        }, {
            id:9,
            title: 'Contact',
            image: './img/william.png'
        }
    ]
    return (
        <div className={classes.navigation}>
            <Navigation links={navbarItems} />
        </div>
    );
}

export default MainNavigation;