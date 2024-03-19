import { RouteObject } from 'react-router-dom';
import { ComponentType, Suspense, lazy } from 'react';
import SuspenseLoader from './Components/SuspenseLoader';

type LoaderProp = { [key: string]: any };
const Loader = (Component: ComponentType<LoaderProp>) => (props: LoaderProp) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
const Dashboard = Loader(lazy(()=> import('./Components/Dashboard')))
const Tasks = Loader(lazy(() => import('./Components/Tasks')));
const User = Loader(lazy(() => import('./Components/Users')));
const BaseLayout = Loader(lazy(() => import('./layout/BaseLayout')));
const SideBarMenu = Loader(lazy(() => import('./layout/SidebarLayout')));
const routes: RouteObject[] = [
  {
    path: '/base',
    element: <BaseLayout />,
    children: [{}],
  },
  {
    path: '/',
    element: <SideBarMenu />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/home',
        element: <Tasks />,
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
];

export default routes;
