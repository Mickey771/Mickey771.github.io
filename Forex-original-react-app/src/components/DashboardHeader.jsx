import { Link } from 'react-router-dom';
import Logo from '../Images/logo-white.png';

export default function DashboardHeader(props) {
    return <>

        <header id="app-header">
            <div id="app-header-logo">

                <h1 className="app-logo" id='dashboard-logo'>
                    <img src={Logo} alt="logo" />
                </h1>

                <h1 className='app-header-name'>{props.name}</h1>
            </div>

            {props.centerExtra ?
                <div className="center-extra">
                    {props.centerExtra}
                </div>
                : ""}


            <div id="app-header-subscription">
                {(props.shownotify === true) ?
                    <Link to="/notification">
                        <div className="svg-icons bell-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.5 2L10.5 4.1953125C7.9131836 4.862095 6 7.2048001 6 10L6 16L4 18L4 19L20 19L20 18L18 16L18 10C18 7.2048001 16.086816 4.862095 13.5 4.1953125L13.5 2L10.5 2 z M 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20L10 20 z" /></svg>
                        </div>
                    </Link>

                    : ""}



                {props.svg ?
                    <div className="svg-icons other-icon">
                        {props.svg}
                    </div>
                    : ""}


                {props.extra ?
                    <div className="svg-icons flex">
                        {props.extra}
                    </div>
                    : ""}
            </div>


        </header>
    </>
}