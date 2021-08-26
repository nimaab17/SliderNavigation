import classes from './Slide.module.css'



function Slide () {
    return(
        <div>
            <div className={classes.slider}>
                <div className={classes.slider_prevBtn}>
                    <button >next</button>
                </div>
                <div className={classes.slider_container} >
                   
                </div>
                <div className={classes.slider_nextBtn}>
                    <button >prev</button>
                </div>
            </div>
        </div>
    )
}


export default Slide;