import { Link } from "react-router-dom";
import { useEffect } from "react";
import Input from "../components/Input";
import Center from "../components/Center";
import { Google } from '../components/icon';
import Logo from '../Images/logo-transparent.png';


export default function Signup() {


    useEffect(() => {
        function UpdatePageTitle() {
            document.title = "Login page";
        }

        UpdatePageTitle();
    }, []);

    return <>

        <Center>
            <main id="sign-up">
                <div className="app-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <section>
                    <h1 className="page-title">Login</h1>
                    <form >
                        <button className="forex-btn">
                            <Google />
                            <span>Sign Up with google</span>
                        </button>
                        <div className="or">or</div>
                        <Input type="email" name="email-address" label="email address" placeholder="Type Here" />
                        <Input type="text" name="password" label="password" placeholder="Type Here" />
                        <Link to="/forget-password" id="forget-password-link" style={{ "color": "red" }}>
                            Forget Password
                        </Link>
                        <div>
                            Don't have an account? &nbsp; <Link to="/signup">Sign Up</Link>
                        </div>


                        <div className="submit-container">
                            <button className="forex-btn submit" type="submit">Get Started</button>
                        </div>



                    </form>
                </section>
            </main>
        </Center>
    </>
}