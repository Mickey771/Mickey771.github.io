import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BodyHidden from '../components/BodyHidden';
import MainDashboard from '../components/MainDashboard';
import DashboardHeader from '../components/DashboardHeader';
import '../styles/Account.css';
import { ActiveLink } from '../components/Functions';


export default function Accounts() {
    useEffect(() => {
        function UpdatePageTitle() {
            document.title = "Accounts";
            ActiveLink("accounts");
        }
        UpdatePageTitle();
    }, [])
    return <>
        <BodyHidden>
            <MainDashboard header={<DashboardHeader name="Account" extra={<>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 11H22V13H9zM9 5H22V7H9zM9 17H22V19H9zM4 16.5A1.5 1.5 0 1 0 4 19.5 1.5 1.5 0 1 0 4 16.5zM4.4 7L2 7 2 5 3.6 5 5.6 3 7 4.4zM4.4 13L2 13 2 11 3.6 11 5.6 9 7 10.4z" /></svg>
                <span>Subscription</span>
            </>
            } />}>
                {/* <!-- HERE --> */}
                <div id="new-account-div">
                    <h1 className="page-title">
                        Accounts
                    </h1>
                    <div id="new-account-type">
                        <Link to="/open-account" className="new-account-type-sub" style={{
                            '--bg': "rgb(71 85 105)", '--col': 'var(--white)'
                        }}>
                            <h2>Open New Account</h2>
                            <span>Choose a broker to register and trade with us</span>
                        </Link>
                        <Link to="/login" className="new-account-type-sub">
                            <h2>Login to Existing Account</h2>
                            <span>Use your Login/password to connect to your broker <br />
                                and continue trading with us.</span>
                        </Link>
                    </div>
                </div>


            </MainDashboard>
        </BodyHidden>

    </>
}