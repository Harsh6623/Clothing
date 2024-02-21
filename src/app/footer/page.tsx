import classes from './footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer(){
    return(
            <section className={classes.footer}>
                    <div className={classes.footercontainer}>
                        <div className={classes.footerrow}>
                            <div className={classes.footercol}>
                                <div className={classes.payment}>
                                    <h5 className={classes.footerhead} >Payment Gateways</h5>
                                    <img className={classes.paymentimg} src="https://i.ibb.co/zn2HMVg/payment.png" alt="" />
                                </div>
                            </div>

                            <div className={classes.footercol}>
                                <div className={classes.instaimg}>
                                    <h5 className={classes.footerhead}>Instagram Pics</h5>
                                    <img className={classes.instapost} src="https://i.ibb.co/CtDtXwt/insta-1.jpg" alt="" />
                                    <img className={classes.instapost} src="https://i.ibb.co/JyJSrcJ/insta-2.jpg" alt="" />
                                    <img className={classes.instapost} src="https://i.ibb.co/f8C2JZj/insta-3.jpg" alt="" />
                                    <img className={classes.instapost} src="https://i.ibb.co/7gFjs42/insta-4.jpg" alt="" />
                                    <br/>   
                                    <img className={classes.instapost} src="https://i.ibb.co/x5fZ3YX/insta-5.jpg" alt="" />
                                    <img className={classes.instapost} src="https://i.ibb.co/N3dFtW1/insta-6.jpg" alt="" />
                                    <img className={classes.instapost} src="https://i.ibb.co/0Mxfw8c/insta-7.jpg" alt="" />
                                    <img className={classes.instapost} src="https://i.ibb.co/wyxYTDy/insta-8.jpg" alt="" />
                                </div>
                            </div>

                            <div className={classes.footercol}>
                                <div className={classes.appdownload}>
                                    <h5 className={classes.footerhead}>Download Mobile App</h5>
                                    <img className={classes.appimg} src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
                                    <img className={classes.appimg} src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                        <hr className={classes.line}/>
                        <div className={classes.footerrow}>
                            <div className={classes.footercolume}>
                                <p className={classes.copyright}>© Copyright</p>
                            </div>
                            <div className={classes.footercolume}>
                                <div className={classes.footericon}>
                                    <FacebookIcon className={classes.Facebook} />
                                    <TwitterIcon className={classes.Twitter} />
                                    <InstagramIcon className={classes.Instagram}/>
                                    <YouTubeIcon className={classes.YouTube} />
                                    <LinkedInIcon className={classes.LinkedIn} />
                                </div>
                            </div>
                        </div>
                </section>
    )
}

export default Footer;