import React from "react";
import classes from './about.module.css'

function AboutPage(){
    return(
        <>
            <section className={classes.main}>
                <div className={classes.heading}>
                    <h1 className={classes.h1}>About Us</h1>
                </div>
                <div className={classes.back}>
                        <h1 className={classes.owner}>MR.HARSH BORSADIYA</h1>
                        <p className={classes.p}>Welcome to Harsh Clothing, where style meets comfort! We are an innovative online clothing retailer dedicated to providing fashion-forward individuals with high-quality apparel that not only looks great but feels great too.Quality and sustainability are at the core of everything we do. We carefully source materials from trusted suppliers to ensure that our clothing is not only stylish but also durable and ethically produced. We are committed to reducing our environmental impact by implementing eco-friendly practices throughout our supply chain and offering a selection of sustainable fashion options.</p>
                        <div>
                            <img className={classes.img} src="images/harsh.jpg" alt="" />
                        </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage;