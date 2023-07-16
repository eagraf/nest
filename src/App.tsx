import './App.css'
import AppList from './views/apps/list.tsx';
import Community from './views/communities/community.tsx'
import CommunityList from './views/communities/list.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dex from './views/dex/dex.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "communities/",
    element: <CommunityList/>,
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
