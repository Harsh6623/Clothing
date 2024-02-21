import classes from './woman.module.css'

function Women(){
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
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1697106444_5335521.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Harry Potter: Snitch Please</h4>
                    <p className={classes.price}>₹2000.00</p>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1704434063_9236821.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Black Hoodie</h4>
                    <p className={classes.price}>₹1499.00</p>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1703224491_9045626.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Bugs Bunny: Samurai</h4>
                    <p className={classes.price}>₹1399.00</p>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695458000_6127942.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Character Pattern</h4>
                    <p className={classes.price}>₹500.00</p>
                </div>
            </div>

            <div className={classes.rows}>
                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1703239991_5484896.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Rose Wine Hoodie </h4>
                    <p className={classes.price}>₹1699.00</p>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691761311_1594946.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Wednesday: Both Worlds</h4>
                    <p className={classes.price}>₹700.00</p>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1707755425_3901567.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Cotton Linen: Sunny Yellow</h4>
                    <p className={classes.price}>₹1300.00</p>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1707808453_1650576.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>TSS Originals: Konnichiwa</h4>
                    <p className={classes.price}>₹1500.00</p>
                </div>
                
            </div>

            <div className={classes.rows}>
                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1706597072_4071274.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Shades Of Marlin</h4>
                    <p className={classes.price}>₹1800.00</p>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1706180462_4117543.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>TSS Originals: Copper</h4>
                    <p className={classes.price}>₹1900.00</p>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1690616355_3549001.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Solids: White (Wide Leg Fit)</h4>
                    <p className={classes.price}>₹2000.00</p>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1706179434_2609511.jpg?format=webp&w=480&dpr=1.3" alt="" />
                    <h4 className={classes.phead}>Solids: Blue</h4>
                    <p className={classes.price}>₹2000.00</p>
                </div>
                
            </div>

            <div className={classes.rows}>
                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://handwoven.aadyam.co.in/cdn/shop/files/AW23RVSA065_01.jpg?v=1690339641&width=1000" alt="" />
                    <h4 className={classes.phead}> Bansari Mashru Silk Saree </h4>
                    <p className={classes.price}>₹39,999.00</p>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://handwoven.aadyam.co.in/cdn/shop/files/SS24RVDP181_1.jpg?v=1708193999&width=1000" alt="" />
                    <h4 className={classes.phead}>Uzma Tanchoi Silk Dupatta</h4>
                    <p className={classes.price}>₹14,999.00</p>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://handwoven.aadyam.co.in/cdn/shop/files/SS24RVDP307_1.jpg?v=1708196113&width=1000" alt="" />
                    <h4 className={classes.phead}>Ambretta Kadwa </h4>
                    <p className={classes.price}>₹19,999.00</p>
                </div>

                <div className={classes.colum}>
                    <img className={classes.pimg} src="https://handwoven.aadyam.co.in/cdn/shop/files/SS24RVSA370_1.jpg?v=1708231470&width=1000" alt="" />
                    <h4 className={classes.phead}>Imara Kadwa Silk Saree</h4>
                    <p className={classes.price}>₹31,999.00</p>
                </div>
                
            </div> 

        </div>
    )   
}

export default Women;