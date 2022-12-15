import { useEffect } from 'react';
import { Link, useNavigate, Form } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import BodyHidden from '../components/BodyHidden';
import MainDashboard from '../components/MainDashboard';
import { ActiveLink } from '../components/Functions';
import { Add, Edit, Goback } from '../components/Icon';
import '../styles/ChangePassword.css';
import Input from '../components/Input';


export default function ChangePassword() {
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

                <div id='change-password-page'>
                    <div id='change-password-page-inner'>

                        <div className='change-password-sub one'>

                            <div className='page-back-title'>
                                <Goback onClick={() => Navigate(-1)} />
                                <h1 className='page-back-name'>Change Password</h1>
                                <div></div>
                            </div>

                        </div>


                        <div className='change-password-sub two'>
                            <Form>
                                <Input label="First Name" name="first-name" placeholder="Yande" type="text" />
                                <Input label="Last Name" name="last-name" placeholder="Yande" type="text" />
                                <Input label="Email" name="email" placeholder="Yandestephens@gmail.com" type="email" />
                                <div class="submit-container">
                                    <button class="forex-btn submit" type="submit">Updated Changes</button>
                                </div>
                            </Form>
                        </div>

                    </div>
                </div>

            </MainDashboard>
        </BodyHidden>
    </>
}