import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
// import '../styles/home.css';

function Home() {
    return <>
        <Header></Header>
        {/* Home Content */}
        {/* <!---- Image content ----> */}
        <section id="image-content">
            <div id="image-content-inner">
                <h1>
                    <span>Grow  Your Wealth on</span>
                    <span>BLW.</span>
                </h1>

                <span id="image-span-content">Invest and trade using our very seamless and accountable forex trading platform</span>

                <Link id="get-started-btn" to="/signup">Get Started</Link>
            </div>
        </section>
        {/* <!---- End Of Image content ----> */}

        {/* <!---- Market Content -----> */}
        <section id="market-contents">

            {/* <!-- Sub 1 --> */}
            <div className="market-contents-sub">

                <div className="market-title">
                    <h2>Market Watchlist</h2>
                    <div className="market-desc">
                        Keep watch of diverse currency pairs and trade wisely on anyone that suits your interest and strategy.
                    </div>
                </div>

                <div className="market-contents-desc">
                    <ul>
                        <li>
                            <div className="currency">
                                <h2>EURUSD</h2>
                                <span>Euro / U.S Dollar</span>
                            </div>

                            <div className="currency-value">
                                <h2>1.0346<sup>2</sup></h2>
                                <span className="currency-value-dynamic green">+ 0.00220 &nbsp; +0.22%</span>
                            </div>
                        </li>

                        <li>
                            <div className="currency">
                                <h2>GBPUSD</h2>
                                <span>British Pound / U.S Dollar</span>
                            </div>

                            <div className="currency-value">
                                <h2>1.0346<sup>2</sup></h2>
                                <span className="currency-value-dynamic green">+ 0.00220 &nbsp; +0.22%</span>
                            </div>
                        </li>

                        <li>
                            <div className="currency">
                                <h2>USDJPY</h2>
                                <span>U.S Dollar / Japanese Yen</span>
                            </div>

                            <div className="currency-value">
                                <h2>1.0346<sup>2</sup></h2>
                                <span className="currency-value-dynamic green">+ 0.00220 &nbsp; +0.22%</span>
                            </div>
                        </li>

                        <li>
                            <div className="currency">
                                <h2>EURUSD</h2>
                                <span>Euro / U.S Dollar</span>
                            </div>

                            <div className="currency-value">
                                <h2>1.0346<sup>2</sup></h2>
                                <span className="currency-value-dynamic green">+ 0.00220 &nbsp; +0.22%</span>
                            </div>
                        </li>



                        <li>
                            <div className="currency">
                                <h2>EURUSD</h2>
                                <span>Euro / U.S Dollar</span>
                            </div>

                            <div className="currency-value">
                                <h2>1.0346<sup>2</sup></h2>
                                <span className="currency-value-dynamic red">- 0.00220 &nbsp; -0.22%</span>
                            </div>
                        </li>

                        <li>
                            <div className="currency">
                                <h2>EURUSD</h2>
                                <span>Euro / U.S Dollar</span>
                            </div>

                            <div className="currency-value">
                                <h2>1.0346<sup>2</sup></h2>
                                <span className="currency-value-dynamic green">+ 0.00220 &nbsp; +0.22%</span>
                            </div>
                        </li>


                        <li>
                            <div className="currency">
                                <h2>EURUSD</h2>
                                <span>Euro / U.S Dollar</span>
                            </div>

                            <div className="currency-value">
                                <h2>1.0346<sup>2</sup></h2>
                                <span className="currency-value-dynamic green">+ 0.00220 &nbsp; +0.22%</span>
                            </div>
                        </li>
                    </ul>


                </div>
                <div className="market-btn">
                    <a href="#">Start Now</a>
                </div>
            </div>
            {/* <!--End Sub 1 --> */}


            {/* <!-- Sub 2 --> */}
            <div className="market-contents-sub">

                <div className="market-title">
                    <h2>Market News</h2>
                    <div className="market-desc">
                        Read news about the forex market to help better your trade. Know when to sell or buy currency pairs from the news
                    </div>
                </div>

                <div className="market-contents-desc">
                    <ul>
                        <li className="market-news-li">
                            <div className="market-news-time">
                                <span>11:20</span>
                                <span>Nov 15</span>
                                <span>BLW</span>
                            </div>
                            <div className="market-news-content">
                                <div className='market-news-content-flex'>
                                    <span className="market-news-content-inner">FTSE 100 stalled by Vodafone outlook cut, weak employment data</span>
                                    <a href="#" className="see-more-link">See more</a>
                                </div>
                            </div>
                        </li>
                        {/* 
                        */}

                        <li className="market-news-li">
                            <div className="market-news-time">
                                <span>11:20</span>
                                <span>Nov 15</span>
                                <span>BLW</span>
                            </div>
                            <div className="market-news-content">
                                <div className='market-news-content-flex'>
                                    <span className="market-news-content-inner">FTSE 100 stalled by Vodafone outlook cut, weak employment data</span>
                                    <a href="#" className="see-more-link">See more</a>
                                </div>
                            </div>
                        </li>


                        <li className="market-news-li">
                            <div className="market-news-time">
                                <span>11:20</span>
                                <span>Nov 15</span>
                                <span>BLW</span>
                            </div>
                            <div className="market-news-content">
                                <div className='market-news-content-flex'>
                                    <span className="market-news-content-inner">FTSE 100 stalled by Vodafone outlook cut, weak employment data</span>
                                    <a href="#" className="see-more-link">See more</a>
                                </div>
                            </div>
                        </li>


                        <li className="market-news-li">
                            <div className="market-news-time">
                                <span>11:20</span>
                                <span>Nov 15</span>
                                <span>BLW</span>
                            </div>
                            <div className="market-news-content">
                                <div className='market-news-content-flex'>
                                    <span className="market-news-content-inner">FTSE 100 stalled by Vodafone outlook cut, weak employment data</span>
                                    <a href="#" className="see-more-link">See more</a>
                                </div>
                            </div>
                        </li>



                        <li className="market-news-li">
                            <div className="market-news-time">
                                <span>11:20</span>
                                <span>Nov 15</span>
                                <span>BLW</span>
                            </div>
                            <div className="market-news-content">
                                <div className='market-news-content-flex'>
                                    <span className="market-news-content-inner">FTSE 100 stalled by Vodafone outlook cut, weak employment data</span>
                                    <a href="#" className="see-more-link">See more</a>
                                </div>
                            </div>
                        </li>



                        <li className="market-news-li">
                            <div className="market-news-time">
                                <span>11:20</span>
                                <span>Nov 15</span>
                                <span>BLW</span>
                            </div>
                            <div className="market-news-content">
                                <div className='market-news-content-flex'>
                                    <span className="market-news-content-inner">FTSE 100 stalled by Vodafone outlook cut, weak employment data</span>
                                    <a href="#" className="see-more-link">See more</a>
                                </div>
                            </div>
                        </li>

                    </ul>


                </div>
                <div className="market-btn">
                    <a href="#">Start Now</a>
                </div>
            </div>
            {/* <!-- End Sub 2 --> */}

        </section>
        {/* <!---- End Of Market Content -----> */}

        {/*End Of Home Content */}
        <Footer></Footer>
    </>
}

export default Home;
