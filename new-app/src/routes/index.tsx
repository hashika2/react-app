import * as react from 'react';
import {useRoutes} from 'react-router-dom';
import { About } from '../components/About';
import { Home } from '../components/home/Home';


export default function Router() {
    let element = useRoutes([
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "about",
            element: <About />,
          },
        //   { path: "tasks", element: <DashboardTasks /> },
        ],
      },
    //   { path: "team", element: <AboutPage /> },
    ]);
  
    return element;
  }
