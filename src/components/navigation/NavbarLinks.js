import classes from './NavbarLinks.module.css'

// (props.number*450 )
// `calc(100% - ${props.number*450})`
function NavbarLinks (props) {
    
    const style = {
       
        backgroundImage: `url(${props.image})`    
    }
    return (
        <div style={style} className={classes.link}>
            <h3 className={classes.Link_title}>{props.title}</h3>
            
        </div>

    )
}


export default NavbarLinks;