import React from "react";

import classes from './Home.module.css'

import Link from "next/link";

function HomePage(){
    return(
        <>
            <main className={classes.main}>
                 <section className={classes.head}>
                
                <div className={classes.banner}>
                    <div className={classes.bannerimg}>
                        <img className={classes.img} src="/images/banner-1.jpg" />
                    </div>
                    <div className={classes.title}>
                        <h1>Fashion Story</h1><br/>
                        <h1>Women's Lifestyle</h1>
                    </div>
                </div>
                </section> 


          

                <section className={classes.offer}>
                <div className={classes.rows}>
                    <div className={classes.textCenter}>
                        <img className={classes.Img} src="https://i.ibb.co/gjjSk0z/exclusive.jpg" alt="" />
                    </div>
                    <div>
                        <div className={classes.sub}>
                            <h4>Vogue Exclusive</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloresexplicabo quia exercitationem iusto animi quos molestiae delectus,tempora reiciendis sapiente saepe recusandae, provident, alias eligendi magnam? A obcaecati modi ab.</p>
                            <Link className={classes.subscribe} href='/'>Subscribe</Link>
                        </div>
                    </div>
                </div>
               </section> 


                <section className={classes.fashiontrands}>
                    <div className={classes.container}>
                        <div className={classes.fashionbox}>
                            <div className={classes.titlestyle}>
                                <h1 className={classes.titlestyleh1}>Vogue Trends</h1>
                            </div>
                            <p className={classes.textcenter}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, labore, vitae ex deserunt suscipit dicta<br/>beatae doloribus perferendis est quos nobis modi? Aperiam, eius? Ullam et exercitationem minus deleniti hic.
                            </p>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.col}>
                                <div className={classes.trendingimg}>
                                    <img className={classes.timg} src="/images/trending-1.jpg" alt="" />
                                    <button type="button" className={classes.btnbuy}>
                                            Buy Now
                                    </button>
                                    <div className={classes.overlay}></div>
                                </div>
                            </div>
                            <div className={classes.col}>
                                <div className={classes.trendingimg}>
                                    <img className={classes.timg} src="/images/trending-2.jpg" alt="" />
                                    <button type="button" className={classes.btnbuy}>
                                            Buy Now
                                    </button>
                                    <div className={classes.overlay}></div>
                                </div>
                            </div>
                            <div className={classes.col}>
                                <div className={classes.trendingimg}>
                                    <img className={classes.timg} src="/images/trending-3.jpg" alt="" />
                                    <button type="button" className={classes.btnbuy}>
                                            Buy Now
                                    </button>
                                    <div className={classes.overlay}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 


                <section className={classes.fashionblog}>
                    <div className={classes.Fhead}>
                        <h1>Latest Fashion Blog</h1>
                    </div>
                    <div className={classes.Fcontainer}>
                        <div className={classes.Frow}>
                            <div className={classes.Fcolume}>
                                <div className={classes.Fmain}>
                                    <img className={classes.Fimg} src="https://i.ibb.co/7jq8mJf/blog-2.jpg" alt="" />
                                    <h5 className={classes.Fheading}>Buy 1 Get 1 free</h5>
                                </div>
                            </div>
                            <div className={classes.Fcolume}>
                                <div className={classes.Fmains}>
                                    <img className={classes.Fimg} src="https://i.ibb.co/JpqQqNk/blog-1.jpg" alt="" />
                                    <h5 className={classes.Fheading}>New style 50% off</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={classes.fashionbrand}>
                    <div className={classes.fashionstyle}>
                        <h1 className={classes.fashionhead}>Our Fashion Brands</h1>
                    </div>
                    <div className={classes.fashioncontainer}>
                        <div className={classes.fashionrow}>
                            <div className={classes.fashioncolume}>
                                <div className={classes.fashionbrands}>
                                    <img className={classes.fashionbrandimg} src="https://i.ibb.co/vQgV2R0/brand-1.png" alt="" />
                                </div>
                                <p>Exclusive Offers</p>
                            </div>
                            <div className={classes.fashioncolume}>
                                <div className={classes.fashionbrands}>
                                    <img className={classes.fashionbrandimg} src="https://i.ibb.co/g3yQzBB/brand-2.png" alt="" />
                                </div>
                                <p>Min. 40% off</p>
                            </div>
                            <div className={classes.fashioncolume}>
                                <div className={classes.fashionbrands}>
                                    <img className={classes.fashionbrandimg} src="https://i.ibb.co/MVBhpFf/brand-4.png" alt="" />
                                </div>
                                <p>Free Delivery</p>
                            </div>
                            <div className={classes.fashioncolume}>
                                <div className={classes.fashionbrands}>
                                    <img className={classes.fashionbrandimg} src="https://i.ibb.co/MNYw41G/brand-6.png" alt="" />
                                </div>
                                <p>Up to 50% off</p>
                            </div>
                        </div>
                    </div>
                </section>
               
            </main>
        </>
    )
}

export default HomePage;