import { useEffect } from 'react';
import BodyHidden from '../components/BodyHidden';
import DashboardHeader from '../components/DashboardHeader';
import MainDashboard from '../components/MainDashboard';
import { ActiveLink } from '../components/Functions';
import Center from '../components/Center';
import { Form } from 'react-router-dom';
import { ArrowLeft, Goback } from '../components/Icon';
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {
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
                    <div className="extra-input profile-pics">

                        <div className="profile-pics-sub pics">
                            <div className="svg-icons">
                                <svg id="users-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 4C18.494917 4 14 8.494921 14 14C14 19.505079 18.494917 24 24 24C29.505083 24 34 19.505079 34 14C34 8.494921 29.505083 4 24 4 z M 24 7C27.883764 7 31 10.116238 31 14C31 17.883762 27.883764 21 24 21C20.116236 21 17 17.883762 17 14C17 10.116238 20.116236 7 24 7 z M 12.5 28C10.032499 28 8 30.032499 8 32.5L8 33.699219C8 36.640082 9.8647133 39.277974 12.708984 41.091797C15.553256 42.90562 19.444841 44 24 44C28.555159 44 32.446744 42.90562 35.291016 41.091797C38.135287 39.277974 40 36.640082 40 33.699219L40 32.5C40 30.032499 37.967501 28 35.5 28L12.5 28 z M 12.5 31L35.5 31C36.346499 31 37 31.653501 37 32.5L37 33.699219C37 35.364355 35.927463 37.127823 33.677734 38.5625C31.428006 39.997177 28.068841 41 24 41C19.931159 41 16.571994 39.997177 14.322266 38.5625C12.072537 37.127823 11 35.364355 11 33.699219L11 32.5C11 31.653501 11.653501 31 12.5 31 z" /></svg>
                                <svg id="add-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M23.976562 4.9785156 A 1.50015 1.50015 0 0 0 22.5 6.5L22.5 22.5L6.5 22.5 A 1.50015 1.50015 0 1 0 6.5 25.5L22.5 25.5L22.5 41.5 A 1.50015 1.50015 0 1 0 25.5 41.5L25.5 25.5L41.5 25.5 A 1.50015 1.50015 0 1 0 41.5 22.5L25.5 22.5L25.5 6.5 A 1.50015 1.50015 0 0 0 23.976562 4.9785156 z" /></svg>
                                <span>Add picture</span>
                            </div>
                            <h2>Yande Stephans</h2>
                        </div>

                        <div className="profile-pics-sub"></div>
                    </div>

                    <div className="extra-input">
                        <div className="input-div">
                            <label htmlFor="firstname">
                                <div className="input-desc">First Name</div>
                                <div className="input-input">
                                    <input type="text" name="firstname" placeholder="Yande" />
                                </div>
                            </label>
                        </div>

                        <div className="input-div">
                            <label htmlFor="lastname">
                                <div className="input-desc">Last Name</div>
                                <div className="input-input">
                                    <input type="text" name="lastname" placeholder="Stephens" />
                                </div>
                            </label>
                        </div>
                    </div>


                    <div className="extra-input">
                        <div className="input-div">
                            <label htmlFor="deposit">
                                <div className="input-desc">Deposit</div>
                                <div className="input-input">
                                    <input type="text" name="deposit" placeholder="10,000 USD" />
                                </div>
                            </label>
                        </div>

                        <div className="input-div">
                            <label htmlFor="email-address">
                                <div className="input-desc">Email Address</div>
                                <div className="input-input">
                                    <input type="text" name="email-address" placeholder="Yandestephens@gmail.com" />
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="extra-input">
                        <div className="input-div">
                            <label htmlFor="NIN">
                                <div className="input-desc">National Identification Number</div>
                                <div className="input-input">
                                    <input type="text" name="NIN" placeholder="09897656" />
                                </div>
                            </label>
                        </div>
                    </div>



                    <div className="extra-input submit-btn">
                        <button type="submit">Save Changes</button>
                    </div>

                </form>


            </MainDashboard>
        </BodyHidden>

    </>
}