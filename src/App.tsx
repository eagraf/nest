import './App.css'
import Community from './views/communities/community.tsx'
import CommunityList from './views/communities/list.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/home/home.tsx';
import Dex from './views/dex/dex.tsx';
import Settings from './views/settings/settings.tsx';
import AppList from './views/apps/list.tsx';
import Navbar from '@components/page/navbar.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "communities/",
    element: <CommunityList/>,
  }, 
  {
    path: "my-data",
    element: <Dex/>,
  }, 
  {
    path: "settings",
    element: <Settings/>,
  }, 
  {
    path: "communities/:communityId",
    element: <Community/>,
  }, 
  {
    path: "communities/:communityId/apps",
    element: <AppList/>,
  }, 
  {
    path: "communities/:communityId/dex",
    element: <Dex/>,
  }, 
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
