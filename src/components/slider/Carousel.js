import classes from './Carousel.module.css'

import SlideItem from './SlideItem'


function Carousel (props) {
    return (
        <div className={classes.carosel}>
            <div className={classes.navigation__carosel_cover}></div>
            <div className={classes.carousel}>
                
                <SlideItem>
                    { props.images.map(image => <img  height="100%" src={image.url} alt="no image" />) }
                </SlideItem>
                
            </div>
            
        </div>
    )
}

export default Carousel;