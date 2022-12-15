import { useEffect } from "react";
import { ActiveLink } from "../components/Functions";
import MainDashboard from "../components/MainDashboard";
import DashboardHeader from "../components/DashboardHeader";

export default function Notification() {
    useEffect(() => {
        function UpdatePageTitle() {
            document.title = "Notification";
            ActiveLink("accounts");
        }

        UpdatePageTitle();
    }, []);
    return <>
        <MainDashboard header={<DashboardHeader

        />}></MainDashboard>
    </>
}