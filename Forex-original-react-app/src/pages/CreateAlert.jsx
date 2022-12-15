import { useEffect } from 'react';
import { Link, useNavigate, Form } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import BodyHidden from '../components/BodyHidden';
import MainDashboard from '../components/MainDashboard';
import { ActiveLink } from '../components/Functions';
import { Add, Edit, Goback } from '../components/Icon';
import '../styles/ChangePassword.css';
import SelectInput from '../components/SelectInput';
import Input from '../components/Input';
import Btn from '../components/Btn';

export default function CreateAlert() {
    const Navigate = useNavigate();
    useEffect(() => {
        function UpdatePageTitle() {
            document.title = "Create Alert";
            ActiveLink("accounts");
        }
        UpdatePageTitle();
    }, []);

    useEffect(() => {
        const keyDownHandler = evt => {
            if (evt.key === 'Escape') {
                evt.preventDefault();
                Navigate(-1);
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };


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
                                <h1 className='page-back-name'>Create Alert</h1>
                                <div></div>
                            </div>

                        </div>


                        <div className='change-password-sub two'>
                            <Form>
                                <SelectInput label="Currency Pair" name="currency-pair" className="small"></SelectInput>
                                <SelectInput label="Condition" name="condition"></SelectInput>
                                <Input label="Value" name="value" className="small" type="number"></Input>
                                <div className='input-extra'>
                                    <Input label="Expiration Time" name="value" type="date"></Input>
                                    <Input name="value" type="time"></Input>
                                </div>
                                <div className='input-extra' style={{ width: "70%", textAlign: "right", marginTop: "20px" }}>
                                    <Btn style={{ "--bg": "var(--white)", "--bor": "1px solid var(--gray-400)" }}>
                                        Cancel
                                    </Btn>
                                    <Btn style={{ "--bg": "var(--main-blue)", color: "var(--white)" }} type="submit">
                                        Create
                                    </Btn>
                                </div>

                            </Form>
                        </div>

                    </div>
                </div>

            </MainDashboard>
        </BodyHidden>
    </>
}