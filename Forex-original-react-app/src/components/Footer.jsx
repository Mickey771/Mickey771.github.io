// import '../styles/footer.css';
import { Facebook, Instagram, Twitter } from './Icon';


export default function Footer() {
    return <>
        <footer id="app-footer">
            <div id="app-logo">
                {/* <!-- <img src="" alt="Site Logo Image">
--> */}
                Logo
            </div>
            <div id="footer-contact">
                <div className="footer-contact-sub">
                    <div className="footer-contact-inner">
                        <h2>Products</h2>
                        <ul>
                            <li><a href="#">Invest</a></li>
                            <li><a href="#">Brokers</a></li>
                            <li><a href="#">Subscription</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact-inner">
                        <h2>Company</h2>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-contact-sub">
                    <div className="footer-contact-inner">
                        <h2>Address and Contact</h2>
                        <ul>
                            <li><a href="#">Address to physical office <br />
                                or quaters</a></li>
                            <li><a href="#">Email Address</a></li>
                            <li><a href="#">Phone Number</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact-inner">
                        <h2>Socials</h2>
                        <div id="social-icons">

                            <a href="#twitter">
                                <Twitter />
                            </a>
                            <a href="#facebook">
                                <Facebook />

                            </a>
                            <a href="#instagram">
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-desc">
                <div id="footer-desc-inner">
                    BLW is a purposeful investing platform, we aim at getting people richer through forex
                    investments in the easiest way possible to them. Grow Wealth through us.
                </div>
                <h3>BLW &copy; 2022</h3>
            </div>
        </footer>
    </>
}