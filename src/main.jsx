import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import HomePage from './maincontent/mainarea.jsx'
import VillageMap from './maincontent/villages.jsx'
import  AboutPeople  from "./maincontent/sidebar/aboutpeople.jsx";
import History from './maincontent/sidebar/history.jsx';
import Sports from './maincontent/sidebar/sports.jsx';
import { GiVillage } from 'react-icons/gi'
const router = createBrowserRouter([
{
    path:'/',
    element:<App />,
    children:[
        { path:'',element:<HomePage/>,
            children:[
                {path:'/',element:<h1>my village</h1>},
                {path:'aboutpeople',element:<AboutPeople/>},
                {path:'sports',element:<Sports/>},
                {path:'history',element:<History/>}
            ]
        },
        {path:'/villages',element:<VillageMap />},
        {},
        {},
        {},
        {}
    ]
}
])
createRoot(document.getElementById('root')).render(
<>
<BrowserRouter>
</BrowserRouter>
    <RouterProvider router={router} />
</>
);
