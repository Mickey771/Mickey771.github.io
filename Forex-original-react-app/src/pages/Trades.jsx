import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BodyHidden from '../components/BodyHidden';
import MainDashboard from '../components/MainDashboard';
import DashboardHeader from '../components/DashboardHeader';
import Center from '../components/Center';
import { ActiveLink } from '../components/Functions';
import { Calender, AddCalender, ArrowRight } from '../components/Icon';
import '../styles/Trades.css';

export default function Trades() {

    const Popup = useRef(null);
    const Popup2 = useRef(null);

    const openCalender = () => {
        Popup.current.classList.add("show");
        Popup2.current.classList.remove("show");
        document.getElementById("calender-btn").classList.add("active");
        document.getElementById("add-calender-btn").classList.remove("active");

    };

    const closeCalender = () => {
        Popup.current.classList.remove("show");
        document.getElementById("calender-btn").classList.remove("active");
    };

    const addCalender = () => {
        Popup2.current.classList.add("show");
        Popup.current.classList.remove("show");
        document.getElementById("add-calender-btn").classList.add("active");
        document.getElementById("calender-btn").classList.remove("active");
    };

    const closeAddCalender = () => {
        Popup2.current.classList.remove("show");
        document.getElementById("add-calender-btn").classList.remove("active");
    };

    useEffect(() => {
        function UpdatePageTitle() {
            document.title = "Trades Ongoing";
            ActiveLink("trades");
        }
        UpdatePageTitle();
    }, [])


    const PositionLists = [{
        id: 1,
        currencyPair: "EURUSD",
        currencyState: `Sell 1.00`,
        currencyFrom: "0.665220",
        currencyTo: "0.556670",
        currencyRiseFall: "-10.00",
    },
    {
        id: 2,
        currencyPair: "EURUSD",
        currencyState: `Sell 1.00`,
        currencyFrom: "0.665220",
        currencyTo: "0.556670",
        currencyRiseFall: "-10.00",

    },
    {
        id: 3,
        currencyPair: "EURUSD",
        currencyState: `Sell 1.00`,
        currencyFrom: "0.665220",
        currencyTo: "0.556670",
        currencyRiseFall: "-10.00",
    },
    {
        id: 4,
        currencyPair: "EURUSD",
        currencyState: `Sell 1.00`,
        currencyFrom: "0.665220",
        currencyTo: "0.556670",
        currencyRiseFall: "-10.00",

    },
    {
        id: 5,
        currencyPair: "EURUSD",
        currencyState: `Sell 1.00`,
        currencyFrom: "0.665220",
        currencyTo: "0.556670",
        currencyRiseFall: "-10.00",

    }
    ];


    const PositionList = PositionLists.map((child) =>

        <li key={child.id}>
            <div className='trade-positions-currency'>
                <div className='currency-pairer'>
                    <h1>{child.currencyPair}</h1>
                    <span className='sell'>{child.currencyState}</span>
                </div>

                <div className='currency-value-pairer'>
                    <span className='currency-value from'>{child.currencyFrom}</span>
                    <div className='svg-icon'>
                        <ArrowRight />
                    </div>
                    <span className='currency-value to'>{child.currencyTo}</span>
                </div>
            </div>
            <div className='trade-positions-currency-drop-rise fall'>
                {child.currencyRiseFall}
            </div>
        </li>
    );



    return <>


        {/* Calender PopUp */}
        <div id='trade-popup' ref={Popup}>
            <button onClick={closeCalender} id="close-calendar-btn" title='close'>&times;</button>
            <div id='trade-popup-inner'>
                <ul>
                    <li>
                        <div className='calender-days-desc'>Today</div>
                        <div className='calender-days-desc-details'>
                            <span>2022 - 10 - 15</span>
                        </div>
                    </li>
                    <li>
                        <div className='calender-days-desc'>Last Month</div>
                        <div className='calender-days-desc-details'>
                            <span>2022 - 10 - 15</span> - <span>2022 - 11 - 15</span>
                        </div>
                    </li>

                    <li>
                        <div className='calender-days-desc'>Last 3 Months</div>
                        <div className='calender-days-desc-details'>
                            <span>2022 - 10 - 15</span> - <span>2022 - 11 - 15</span>
                        </div>
                    </li>

                    <li>
                        <div className='calender-days-desc'>Last 6 Months</div>
                        <div className='calender-days-desc-details'>
                            <span>2022 - 10 - 15</span> - <span>2022 - 11 - 15</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        {/* End of Calender PopUp */}


        {/* Add Calender PopUp */}
        <div id='trade-popup2' ref={Popup2}>
            <button onClick={closeAddCalender} id="close-add-calendar-btn" title='close'>&times;</button>
            <div id='trade-popup-inner'>
                <ul>
                    <li>
                        <Link>Close order</Link>
                    </li>
                    <li>
                        <Link>Modify order</Link>
                    </li>
                    <li>
                        <Link>New order</Link>
                    </li>
                    <li>
                        <Link>Chart</Link>
                    </li>
                </ul>
            </div>
        </div>
        {/* End of Add Calender PopUp */}




        <BodyHidden>
            <MainDashboard
                header={<DashboardHeader
                    shownotify={true}
                    name={<>
                        <span>Trade</span><br />
                        <b>-23.00 USD</b></>}
                    svg={<div onClick={openCalender} id="calender-btn"><Calender /></div>}
                    extra={<div onClick={addCalender} id="add-calender-btn"><AddCalender /></div>}
                />
                }
            >
                <div id='trade-page'>
                    <div id='trade-page-inner'>
                        <div id='trade-page-header-link'>
                            <Link className='active' to='/trades'>Ongoing trade</Link>
                            <Link to="/trades/concluded">Concluded trade</Link>
                        </div>
                        {/* Balance */}
                        <div className='balance-list'>
                            <ul>
                                <li>
                                    <div className='balance-desc'>Balance:</div>
                                    <div className='balance-amount'>10,000.00</div>
                                </li>

                                <li>
                                    <div className='balance-desc'>Equity:</div>
                                    <div className='balance-amount'>9.956.45</div>
                                </li>
                            </ul>
                        </div>
                        {/* End Of Balance */}

                        {/* Position */}
                        <div id='trade-positions'>
                            <div className='trade-position-desc'>
                                Position
                            </div>
                            <ul className='trade-position-values'>
                                {PositionList}
                            </ul>
                        </div>
                        {/* End OfPosition */}


                    </div>
                </div>
            </MainDashboard>
        </BodyHidden>

    </>
}