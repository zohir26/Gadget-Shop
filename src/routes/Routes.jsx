import MainLayout from '../layouts/MainLayout.jsx';
import Home from '../pages/Home.jsx';
import Statistics from '../pages/Statistics.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import {
  createBrowserRouter

} from "react-router-dom";
import Cards from '../components/Cards.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import GadgetsDetails from '../pages/GadgetsDetails.jsx';
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
        path: "/",
        element: <Home></Home>,
        loader:()=> fetch('../categories.json'),
        
        children:[
          {
            path: "/",
            element: <Cards></Cards>,
            loader:()=> fetch('../gadgets.json'),
            
        },
          {
            path: "/cards/:gadgetCards",
            element: <Cards></Cards>,
            loader:()=> fetch('../gadgets.json')
        },

        ]
        },
        {
            path: "/statistics",
            element: <Statistics></Statistics>,
            loader:()=> fetch('../gadgets.json')
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
            loader:()=> fetch('../gadgets.json')
        },
        {
          path: "/gadgets/:product_id",
          element: <GadgetsDetails></GadgetsDetails>,
          loader:()=> fetch('../gadgets.json')
      },
      ]
    },
    
  ]);

  export default router;