import { useEffect } from "react";
import Logo from '../Images/logo.jpeg';
import { Google } from '../components/icon';
import Input from '../components/Input';
import Center from "../components/Center";
import { Link } from "react-router-dom";

export default function Signup() {
    useEffect(() => {
        function UpdatePageTitle() {
            document.title = "Sign up page";
        }
        UpdatePageTitle();
    }, []);

    return <>
        <Center style={{ paddingTop: "20px", overflowY: "auto" }}>
            <main id="sign-up">
                <div className="app-logo">
                    <img src={Logo} alt="" />
                </div>
                <section>
                    <h1 className="page-title">Sign Up</h1>
                    <form >
                        <button className="forex-btn">
                            <Google />
                            <span>Sign Up with google</span>
                        </button>
                        <div className="or">or</div>

                        <div className="input-extra">
                            <Input type="text" name="firstname" label="first name" placeholder="Type Here" />
                            <Input type="text" name="lastname" label="last name" placeholder="Type Here" />
                        </div>
                        <Input type="text" name="NIN" label="National Identity Number" placeholder="Type Here" />
                        <Input type="email" name="email-adddress" label="Email Address" placeholder="Type Here" />
                        <Input type="password" name="password" label="Password" placeholder="Type Here" />


                        {/* <label for="password">
    <div  className="input-desc">Password</div>
    <div  className="input-content">
        <input type="password" placeholder="Type here" id="password" name="password">
    </div>
</label> */}

                        <div>
                            Already Have an account? <Link to="/login">Sign in</Link>
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