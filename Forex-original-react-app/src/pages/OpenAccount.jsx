import { useEffect } from 'react';
import BodyHidden from '../components/BodyHidden';
import DashboardHeader from '../components/DashboardHeader';
import MainDashboard from '../components/MainDashboard';
import { ActiveLink } from '../components/Functions';
import Center from '../components/Center';
import { Form } from 'react-router-dom';
import { ArrowLeft, Goback } from '../components/Icon';
import { Link, useNavigate } from 'react-router-dom';

export default function OpenAccount() {
    const Navigate = useNavigate();

    useEffect(() => {
        function UpdatePageTitle() {
            document.title = "Open Account";
            ActiveLink("accounts");
        }
        UpdatePageTitle();
    }, [])

    return <>
        <BodyHidden>
            <MainDashboard
                header={<DashboardHeader
                    shownotify={true}
                    name="Account"
                    extra={<>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 11H22V13H9zM9 5H22V7H9zM9 17H22V19H9zM4 16.5A1.5 1.5 0 1 0 4 19.5 1.5 1.5 0 1 0 4 16.5zM4.4 7L2 7 2 5 3.6 5 5.6 3 7 4.4zM4.4 13L2 13 2 11 3.6 11 5.6 9 7 10.4z" /></svg>
                        <span>Subscription</span>
                    </>} />}
            >

                <Goback onClick={() => Navigate(-1)} />
                <form>
                    <div className="extra-input">
                        <div className="input-div">
                            <label for="account-type">
                                <div className="input-desc">Account Type</div>
                                <div className="input-input">
                                    <input type="text" name="account-type" placeholder="Forex" />
                                </div>
                            </label>
                        </div>

                        <div className="input-div">
                            <label for="account-type">
                                <div className="input-desc">Leverage</div>
                                <div className="input-input">
                                    <input type="text" name="account-type" placeholder="1: 100" />
                                </div>
                            </label>
                        </div>
                    </div>


                    <div className="extra-input">
                        <div className="input-div">
                            <label for="deposit">
                                <div className="input-desc">Deposit</div>
                                <div className="input-input">
                                    <input type="text" name="deposit" placeholder="10,000 USD" />
                                </div>
                            </label>
                        </div>

                        <div className="input-div">
                            <label for="select-broker">
                                <div className="input-desc">Select Broker</div>
                                <div className="input-input">
                                    <select name="select-broker" id="select-broker">
                                        <option value="Deriv">
                                            Deriv
                                        </option>
                                    </select>
                                </div>
                            </label>
                        </div>
                    </div>


                    <div className="extra-input extra">

                        <div className="input-div">
                            <label for="password">
                                <div className="input-desc">Login</div>
                                <div className="input-input">
                                    <select name="select-broker" id="select-broker">
                                        <option value="Deriv">
                                            Deriv
                                        </option>
                                    </select>
                                </div>
                            </label>
                        </div>

                        <div className="input-div">
                            <label for="password">
                                <div className="input-desc">Password</div>
                                <div className="input-input">
                                    <input type="password" name="password" placeholder="Password" />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="extra-input submit-btn">
                        <button type="submit" onClick={(evt) => {
                            evt.preventDefault();
                        }}>Create</button>
                    </div>

                </form>


            </MainDashboard>
        </BodyHidden>

    </>
}