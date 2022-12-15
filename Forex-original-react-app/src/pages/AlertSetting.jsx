import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import BodyHidden from '../components/BodyHidden';
import MainDashboard from '../components/MainDashboard';
import { ActiveLink } from '../components/Functions';
import { Add, Edit, Goback } from '../components/Icon';
import '../styles/AlertSetting.css';


export default function AlertSetting() {
    const Navigate = useNavigate();
    useEffect(() => {
        function UpdatePageTitle() {
            document.title = "Alert Settings";
            ActiveLink("accounts");
        }
        UpdatePageTitle();
    }, []);
    return <>
        <BodyHidden>
            <MainDashboard header={<DashboardHeader
                shownotify={true}
                name="Account"
                extra={<>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 11H22V13H9zM9 5H22V7H9zM9 17H22V19H9zM4 16.5A1.5 1.5 0 1 0 4 19.5 1.5 1.5 0 1 0 4 16.5zM4.4 7L2 7 2 5 3.6 5 5.6 3 7 4.4zM4.4 13L2 13 2 11 3.6 11 5.6 9 7 10.4z" /></svg>
                    <span>Subscription</span>
                </>}
            />
            }
            >

                <div id='alert-settings-page'>
                    <div id='alert-settings-page-inner'>

                        <div className='alert-settings-sub one'>

                            <div className='page-back-title'>
                                <Goback onClick={() => Navigate(-1)} />
                                <h1 className='page-back-name'>Alert Setting</h1>
                                <div></div>
                            </div>

                            <div className='alert-email-disabled'>
                                <div className='alert-email-disabled-text'>
                                    <h3>
                                        Disable Email Notification
                                    </h3>
                                    <span>
                                        Diable the platform from sending notification<br />
                                        through mail
                                    </span>
                                </div>
                                <div className='alert-email-disabled-switch'>
                                    <label className="toggle-switch">
                                        <input type="checkbox" />
                                        <span className="toggle-slider round"></span>
                                    </label>

                                </div>
                            </div>


                            <div className='alert-logs-activities'>
                                <span>Alert Logs</span>
                                <div className='alert-used-logs-info'>
                                    {/* ALERT LOG 1 */}
                                    <div className='alert-used-logs-info-sub'>
                                        <div className='one'>
                                            <h2>USDJPY</h2>
                                            <span className='alerted-date'>
                                                2022-11-15 &nbsp;&nbsp;10:00PM
                                            </span>
                                        </div>
                                        <div className='two expired'>
                                            <span className='alert-sell'>
                                                Sell &nbsp;&nbsp; 0.00876
                                            </span>
                                            <span className='alert-session-type'>
                                                Expired
                                            </span>
                                        </div>
                                    </div>
                                    {/* ALERT LOG 2 */}
                                    <div className='alert-used-logs-info-sub'>
                                        <div className='one'>
                                            <h2>USDJPY</h2>
                                            <span className='alerted-date'>
                                                2022-11-15 &nbsp;&nbsp;10:00PM
                                            </span>
                                        </div>
                                        <div className='two expired'>
                                            <span className='alert-sell'>
                                                Sell &nbsp;&nbsp; 0.00876
                                            </span>
                                            <span className='alert-session-type blue'>
                                                Edit
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='alert-settings-sub two'>
                            <Link to='/create-alert'>Update Setting</Link>
                        </div>
                    </div>
                </div>

            </MainDashboard>
        </BodyHidden>
    </>
}