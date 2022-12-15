import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import BodyHidden from '../components/BodyHidden';
import MainDashboard from '../components/MainDashboard';
import { Link } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import Center from '../components/Center';
import { ActiveLink } from '../components/Functions';
import '../styles/news.css';



export default function News() {
    useEffect(() => {
        function UpdatePageTitle() {
            document.title = "News";
            ActiveLink("news");
        }
        UpdatePageTitle();
    }, []);



    const newArray = [
        {
            id: 1,
            newsDate: `Nov 15`,
            newsTime: "11:20",
            newsContent: "FTSE 100 stalled by Vodafone outlook cut, weak employment data"
        },
        {
            id: 2,
            newsDate: `Nov 15`,
            newsTime: "11:20",
            newsContent: "FTSE 100 stalled by Vodafone outlook cut, weak employment data"
        },

        {
            id: 3,
            newsDate: `Nov 15`,
            newsTime: "11:20",
            newsContent: "FTSE 100 stalled by Vodafone outlook cut, weak employment data"
        },

        {
            id: 4,
            newsDate: `Nov 15`,
            newsTime: "11:20",
            newsContent: "FTSE 100 stalled by Vodafone outlook cut, weak employment data"
        },
        {
            id: 5,
            newsDate: `Nov 15`,
            newsTime: "11:20",
            newsContent: "FTSE 100 stalled by Vodafone outlook cut, weak employment data"
        },
        {
            id: 6,
            newsDate: `Nov 15`,
            newsTime: "11:20",
            newsContent: "FTSE 100 stalled by Vodafone outlook cut, weak employment data"
        },
        {
            id: 7,
            newsDate: `Nov 15`,
            newsTime: "11:20",
            newsContent: "FTSE 100 stalled by Vodafone outlook cut, weak employment data"
        },
        {
            id: 8,
            newsDate: `Nov 15`,
            newsTime: "11:20",
            newsContent: "FTSE 100 stalled by Vodafone outlook cut, weak employment data"
        },
        {
            id: 9,
            newsDate: `Nov 15`,
            newsTime: "11:20",
            newsContent: "FTSE 100 stalled by Vodafone outlook cut, weak employment data"
        },



    ];

    const NewsList = newArray.map((child) =>
        <li className="market-news-li" key={child.id}>
            <div className="market-news-time">
                <span>{child.newsTime}</span>
                &nbsp;&nbsp;   &nbsp;&nbsp;
                <span>{child.newsDate}</span>
                &nbsp;&nbsp;
                <span>BLW</span>
            </div>
            <div className="market-news-content">
                <div className='news-links'>
                    <span className="market-news-content-inner">{child.newsContent}</span>
                    <Link href="#" className="see-more-link">See more</Link>
                </div>
            </div>
        </li>
    );

    return <>
        <BodyHidden>
            <MainDashboard
                header={<DashboardHeader
                    shownotify={true}
                    name="News"
                />}

            >
                <div id='news-page'>
                    <div className='market-contents-desc'>
                        <ul>
                            {NewsList}
                        </ul>
                    </div>
                </div>

            </MainDashboard>
        </BodyHidden>

    </>
}