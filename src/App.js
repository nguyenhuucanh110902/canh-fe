import './App.css';

import { Route, Routes } from 'react-router-dom';
import { adminRoutes } from './routes';

const DefaultLauyout = ({children}) => {
  return <>{children}</>
}

const NoGuard = ({children}) => {
  return <>{children}</>
}


function App() {
  return (
    <Routes>
      {adminRoutes.map((route, index) => {
        const Page = route.component;
        const Layout = route.layout || DefaultLauyout;
        let Guard = route.guard || NoGuard;
       
        return <Route key={index} path={route.path} element={
          <Guard>
            <Layout>
              <Page />
            </Layout>
          </Guard>
         
        }></Route>
      })}

    </Routes>
  
  );
}

export default App;
