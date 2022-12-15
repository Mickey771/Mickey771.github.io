import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import BodyHidden from '../components/BodyHidden';
import MainDashboard from '../components/MainDashboard';
import { ActiveLink } from '../components/Functions';
import { Add, Delete } from '../components/Icon';
import '../styles/Quotes.css';


export default function EditCurrency() {
    useEffect(() => {
        function UpdatePageTitle() {
            document.title = "Add Quotes";
            ActiveLink("quotes");
        }
        UpdatePageTitle();
    }, []);

    const quotes = [
        {
            currency: "EURUSD",
            currencyPair: "Euro / U.S Dollar",
            currencyValue: "1.0346",
            currencyValueSup: "2",
            currencyDynamics: "+0.00220",
            currencyDynamicsPercentage: "+0.22%"
        },

        {
            currency: "GBPUSD",
            currencyPair: "British Pound / U.S Dollar",
            currencyValue: "1.0346",
            currencyValueSup: "2",
            currencyDynamics: "+0.00220",
            currencyDynamicsPercentage: "+0.22%"
        },
        {
            currency: "USDJPY",
            currencyPair: "U.S Dollar / Japanese Yen",
            currencyValue: "1.0346",
            currencyValueSup: "2",
            currencyDynamics: "+0.00220",
            currencyDynamicsPercentage: "+0.22%"
        },
        {
            currency: "EURUSD",
            currencyPair: "Euro / U.S Dollar",
            currencyValue: "1.0346",
            currencyValueSup: "2",
            currencyDynamics: "+0.00220",
            currencyDynamicsPercentage: "+0.22%"
        },

        {
            currency: "EURUSD",
            currencyPair: "Euro / U.S Dollar",
            currencyValue: "1.0346",
            currencyValueSup: "2",
            currencyDynamics: "+0.00220",
            currencyDynamicsPercentage: "+0.22%"
        },


        {
            currency: "EURUSD",
            currencyPair: "Euro / U.S Dollar",
            currencyValue: "1.0346",
            currencyValueSup: "2",
            currencyDynamics: "+0.00220",
            currencyDynamicsPercentage: "+0.22%"
        },


        {
            currency: "EURUSD",
            currencyPair: "Euro / U.S Dollar",
            currencyValue: "1.0346",
            currencyValueSup: "2",
            currencyDynamics: "+0.00220",
            currencyDynamicsPercentage: "+0.22%"
        },

    ];
    const listItems = quotes.map((child) =>
        <li>
            <div className="currency">
                <h2>{child.currency}</h2>
                <span>{child.currencyPair}</span>
            </div>

            <div className="currency-value">
                <Delete />
                {/* <h2>{child.currencyValue}<sup>{child.currencyValueSup}</sup></h2> */}
                {/* <span className="currency-value-dynamic green">{child.currencyDynamics} &nbsp; {child.currencyDynamicsPercentage}</span> */}
            </div>
        </li>
    );


    return <>
        <BodyHidden>
            <MainDashboard header={
                <DashboardHeader
                    name="Edit Symbols"
                    svg={<Link to="/quotes/add"><Add /></Link>}
                />
            }
            >
                <div id='quotes-page'>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </MainDashboard>
        </BodyHidden>

    </>
}