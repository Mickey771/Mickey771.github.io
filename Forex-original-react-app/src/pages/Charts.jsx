import { useState, useEffect, useRef } from "react";
import BodyHidden from '../components/BodyHidden';
import MainDashboard from '../components/MainDashboard';
import Center from '../components/Center';
import { ActiveLink } from '../components/Functions';
import { Add, Edit, Function, AddChart, Timer, Dollars } from '../components/Icon';
import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";







export default function Charts() {
    useEffect(() => {
        function UpdatePageTitle() {
            document.title = "Charts"
            ActiveLink("charts");
        }
        UpdatePageTitle();
    }, []);



    const chartStateValue = {
        colors: ["#FF1654", "#247BA0"],
        series: [{

            data: [10, 15, 20, 25, 30, 35, 40]
        },
        {
            data: [20, 29, 37, 36, 44, 45, 50, 58]
        }

        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: '',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yaxis: []
        },


    };


    const [chartState, setChartState] = useState(chartStateValue);


    return <>
        <BodyHidden>
            <MainDashboard
                header={<DashboardHeader
                    centerExtra={<>
                        <Link to="/notification">
                            <div className="svg-icons bell-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.5 2L10.5 4.1953125C7.9131836 4.862095 6 7.2048001 6 10L6 16L4 18L4 19L20 19L20 18L18 16L18 10C18 7.2048001 16.086816 4.862095 13.5 4.1953125L13.5 2L10.5 2 z M 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20L10 20 z" /></svg>
                            </div>
                        </Link>

                        <Link >
                            <div className="svg-icons">
                                <Function />
                            </div>
                        </Link>

                        <Link >
                            <div className="svg-icons">
                                <Add />
                            </div>
                        </Link>

                        <Link>
                            <div className="svg-icons">
                                <Timer />
                            </div>
                        </Link>
                    </>}
                    svg={<Link><Dollars /></Link>}
                    extra={<Link><AddChart /></Link>} />}
            >
                <div id="chart-currency-content">
                    <h1>EURUSD</h1>
                    <table>
                        <tr>
                            <td>Euro / U.S Dollar</td>
                            <td>10 Mins</td>
                        </tr>
                        <tr>
                            <td>0.67546 &nbsp; 0.675544</td>
                            <td>0.98765468</td>
                        </tr>
                    </table>
                </div>
                <ReactApexChart options={chartState.options} series={chartState.series} type="line" height={350} />
            </MainDashboard>
        </BodyHidden>

    </>
}