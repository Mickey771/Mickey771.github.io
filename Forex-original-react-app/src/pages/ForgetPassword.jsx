import { Link } from "react-router-dom";
import { useEffect } from "react";
import Input from "../components/Input";
import Center from "../components/Center";
import { Google } from '../components/icon';
import Logo from '../Images/logo-transparent.png';


export default function ForgetPassword() {


    useEffect(() => {
        function UpdatePageTitle() {
            document.title = "Login page";
        }

        UpdatePageTitle();
    }, [])
    return <>

        <Center>
            <main id="sign-up">
                <div className="app-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <section>
                    <h1 className="page-title">Forget Password</h1>
                    <form >

                        <Input type="email" name="email-address" label="registered email address" placeholder="Type your Email" />

                        <div>
                            Don't have an account? &nbsp; <Link to="/signup">Sign Up</Link>
                        </div>


                        <div className="submit-container">
                            <button className="forex-btn submit" type="submit">Reset Password</button>
                        </div>



                    </form>
                </section>
            </main>
        </Center>
    </>
}