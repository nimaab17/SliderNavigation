import classes from './SlideItem.module.css'



function SlideItem (props) {
    return(
        <div className={classes.slider}>
            <div className={classes.slider__item}>
                {props.children}
            </div>
        </div>
    )
}


export default SlideItem;