import DashboardNav from './DashboardNav';
export default function MainDashboard(props) {
    return <>
        <main id="main-app">
            <div id="main-app-inner">
                {props.header}
                <div id="scrollable-content">
                    {props.children}
                </div>
            </div>
            <DashboardNav></DashboardNav>
        </main>
    </>
}