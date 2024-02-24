import classes from './kids.module.css'

function Kids(){
    return(
        <div className={classes.container}>
            <div className={classes.head}>
                <h2>All Products</h2>
                <select className={classes.select}>
                    <option className={classes.option} value="">Default Shorting</option>
                    <option className={classes.option} value="">Short by price</option>
                    <option className={classes.option} value="">Short by popularity</option>
                    <option className={classes.option} value="">Short by rating</option>
                    <option className={classes.option} value="">Short by sale</option>
                </select>
            </div>

            <div className={classes.rows}>
                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1704450421_3111228.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Batman: The Knight</h4>
                    <p className={classes.price}>₹1000.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1699876689_6016802.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>A Magical Journey</h4>
                    <p className={classes.price}>₹499.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1705641436_3519821.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Tom And Jerry: Frenemies</h4>
                    <p className={classes.price}>₹599.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1707828264_2312132.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Colourblock</h4>
                    <p className={classes.price}>₹400.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>
            </div>

            <div className={classes.rows}>
                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708348758_2031842.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Superman: Iconic Emblem </h4>
                    <p className={classes.price}>₹500.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1700228710_2006820.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Spider-Man: Friendly Hero</h4>
                    <p className={classes.price}>₹500.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708234804_1703923.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Looney Tunes: What's Up</h4>
                    <p className={classes.price}>₹300.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1688977229_8029603.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Batman: The Dark Knight</h4>
                    <p className={classes.price}>₹600.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>
                
            </div>

            <div className={classes.rows}>
                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/242536%20Cars%20Lightning%20Mcqueen%20Racing%20Boys%20Cotton%20Joggers%20top%20&%20bottam%20set_12024_02_10-12-22-35.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Cars: McQueen Set</h4>
                    <p className={classes.price}>₹1700.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1706888676_58246032024_02_09-21-30-03.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}> Pawsome Squad Set</h4>
                    <p className={classes.price}>₹1000.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/237591%20ISRO%20To%20The%20Stars_12024_02_03-16-56-08.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>ISRO: To The Stars Set</h4>
                    <p className={classes.price}>₹1600.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/TSS-Originals-Dino-Pattern-Boys-Tshirt%20(1)2023_08_23-12-25-44.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Originals: Dino Pattern Set</h4>
                    <p className={classes.price}>₹800.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>
                
            </div>

            <div className={classes.rows}>
                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1694177478_2614523.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Harry Potter: Hedwig</h4>
                    <p className={classes.price}>₹500.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>
                

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687516736_9324695.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Dexter: Trouble Maker</h4>
                    <p className={classes.price}>₹600.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>p

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687514557_7347519.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}> Simba Pattern</h4>
                    <p className={classes.price}>₹700.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687516697_8329592.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Snoopy Floral Pattern</h4>
                    <p className={classes.price}>₹500.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>
                
            </div> 
        
        </div>
    )   
}

export default Kids;