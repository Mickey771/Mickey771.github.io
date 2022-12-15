import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import BodyHidden from '../components/BodyHidden';
import MainDashboard from '../components/MainDashboard';
import { ActiveLink } from '../components/Functions';
import { Add, Edit } from '../components/Icon';
import '../styles/Quotes.css';


export default function Quotes() {
    useEffect(() => {
        function UpdatePageTitle() {
            document.title = "Quotes";
            ActiveLink("quotes");
        }
        UpdatePageTitle();
    }, []);

    const quotes = [
        {
            id: 1,
            currency: "EURUSD",
            currencyPair: "Euro / U.S Dollar",
            currencyValue: "1.0346",
            currencyValueSup: "2",
            currencyDynamics: "+0.00220",
            currencyDynamicsPercentage: "+0.22%"
        },

        {
            id: 2,
            currency: "GBPUSD",
            currencyPair: "British Pound / U.S Dollar",
            currencyValue: "1.0346",
            currencyValueSup: "2",
            currencyDynamics: "+0.00220",
            currencyDynamicsPercentage: "+0.22%"
        },
        {
            id: 3,
            currency: "USDJPY",
            currencyPair: "U.S Dollar / Japanese Yen",
            currencyValue: "1.0346",
            currencyValueSup: "2",
            currencyDynamics: "+0.00220",
            currencyDynamicsPercentage: "+0.22%"
        },
        {
            id: 4,
            currency: "EURUSD",
            currencyPair: "Euro / U.S Dollar",
            currencyValue: "1.0346",
            currencyValueSup: "2",
            currencyDynamics: "+0.00220",
            currencyDynamicsPercentage: "+0.22%"
        },

        {
            id: 5,
            currency: "EURUSD",
            currencyPair: "Euro / U.S Dollar",
            currencyValue: "1.0346",
            currencyValueSup: "2",
            currencyDynamics: "+0.00220",
            currencyDynamicsPercentage: "+0.22%"
        },


        {
            id: 6,
            currency: "EURUSD",
            currencyPair: "Euro / U.S Dollar",
            currencyValue: "1.0346",
            currencyValueSup: "2",
            currencyDynamics: "+0.00220",
            currencyDynamicsPercentage: "+0.22%"
        },


        {
            id: 7,
            currency: "EURUSD",
            currencyPair: "Euro / U.S Dollar",
            currencyValue: "1.0346",
            currencyValueSup: "2",
            currencyDynamics: "+0.00220",
            currencyDynamicsPercentage: "+0.22%"
        },

    ];
    const listItems = quotes.map((child) =>
        <li key={child.id}>
            <div className="currency">
                <h2>{child.currency}</h2>
                <span>{child.currencyPair}</span>
            </div>

            <div className="currency-value">
                <h2>{child.currencyValue}<sup>{child.currencyValueSup}</sup></h2>
                <span className="currency-value-dynamic green">{child.currencyDynamics} &nbsp; {child.currencyDynamicsPercentage}</span>
            </div>
        </li>
    );


    return <>
        <BodyHidden>
            <MainDashboard header={<DashboardHeader
                shownotify={true}
                name="Quotes"
                svg={<Link to="/quotes/add"><Add /></Link>}
                extra={<Link to="/quotes/edit"><Edit /></Link>} />}>
                <div id='quotes-page'>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </MainDashboard>
        </BodyHidden>

    </>
}