import classes from './men.module.css'

function Men(){
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
                    <img className={classes.pimg} src="https://i.ibb.co/47Sk9QL/product-1.jpg" alt="" />
                    <h4 className={classes.phead}>Red Printed T-shirt</h4>
                    <p className={classes.price}>₹200.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Tom-Jerry Printed T-Shirt</h4>
                    <p className={classes.price}>₹350.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708336657_6386586.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>White T-shirt</h4>
                    <p className={classes.price}>₹250.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708340237_7716188.jpg?format=webp&w=1080&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Purpule Hoddie</h4>
                    <p className={classes.price}>₹800.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>
            </div>

            <div className={classes.rows}>
                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708341244_3289173.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Olive Men Utility Shirts </h4>
                    <p className={classes.price}>₹500.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1707975281_6703196.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Jacket With Shirt</h4>
                    <p className={classes.price}>₹1500.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1652178336_3029592.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Batman Shirt</h4>
                    <p className={classes.price}>₹2000.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1707318636_3587388.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Summer Shirt</h4>
                    <p className={classes.price}>₹300.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>
                
            </div>

            <div className={classes.rows}>
                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1706856988_7914403.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Mid Blue Wash</h4>
                    <p className={classes.price}>₹800.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708493936_2159387.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Black Men Cargo Jeans</h4>
                    <p className={classes.price}>₹1000.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1706857114_5780689.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Brown Men Cargo</h4>
                    <p className={classes.price}>₹1000.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1703656379_8859673.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}> Batman Men's</h4>
                    <p className={classes.price}>₹2200.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>
                
            </div>

            <div className={classes.rows}>
                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/r/y/h/l-mix-rs-mrhumans-original-imagxgwvm7gyn5nh.jpeg?q=70&crop=false" alt="" />
                    <h4 className={classes.phead}> Spread Collar Casual </h4>
                    <p className={classes.price}>₹1500.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/6/t/q/xxl-rs-47-1-prt-mrhumans-original-imagxjyjrxbmssvh.jpeg?q=70&crop=false" alt="" />
                    <h4 className={classes.phead}>Casual Collar</h4>
                    <p className={classes.price}>₹1800.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/a/3/t/l-full-sleeve-shirt-for-men-nat-jastica-original-imagxw9pzamburvc.jpeg?q=70&crop=false" alt="" />
                    <h4 className={classes.phead}>Formal Wear</h4>
                    <p className={classes.price}>₹1200.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/q/h/4/m-bbds-marmic-fab-original-imagnyy6prxjmhg3.jpeg?q=70&crop=false" alt="" />
                    <h4 className={classes.phead}>Striped Mandarin</h4>
                    <p className={classes.price}>₹1000.00</p>
                    <br/>
                    <button className={classes.btn}>Buy Now</button>
                </div>
                
            </div> 

        </div>
    )   
}

export default Men;