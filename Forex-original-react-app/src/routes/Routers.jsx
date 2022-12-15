import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import OpenAccount from '../pages/OpenAccount';
import Quotes from '../pages/Quotes';
import AddQuotes from '../pages/AddQuotes';
import EditCurrency from '../pages/EditCurrency';
import Accounts from '../pages/Accounts';
import News from '../pages/News';
import Notification from '../pages/Notification';
import Trades from '../pages/Trades';
import Charts from '../pages/Charts';
import ForgetPassword from '../pages/ForgetPassword';
import Profile from '../pages/Profile';
import AlertSetting from '../pages/AlertSetting';
import ChangePassword from '../pages/ChangePassword';
import CreateAlert from '../pages/CreateAlert';
import TradesConclude from '../pages/TradesConclude';

const Routers = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/admin",
        element: <><h1>Admin Page</h1></>
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/forget-password",
        element: <ForgetPassword />
    },
    {
        path: "/open-account",
        element: <OpenAccount />
    },
    {
        path: "/quotes",
        element: <Quotes />
    },
    {
        path: "/quotes/add",
        element: <AddQuotes />
    },
    {
        path: "/quotes/edit",
        element: <EditCurrency />
    },
    {
        path: "/news",
        element: <News />,
        children: [
            {
                path: "/news/:newId",
                element: <News />,
            }
        ],
    },
    {
        path: "/trades",
        element: <Trades />
    },
    {
        path: "/trades/concluded",
        element: <TradesConclude />
    },
    {
        path: "/accounts",
        element: <Accounts />
    },
    {
        path: "/charts",
        element: <Charts />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/notification",
        element: <Notification />
    },
    {
        path: "/alert-setting",
        element: <AlertSetting />
    },
    {
        path: "/change-password",
        element: <ChangePassword />
    },
    {
        path: "/create-alert",
        element: <CreateAlert />
    }
];

export default Routers;
