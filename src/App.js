import logo from './logo.svg';
import './App.css';

import { UserLayout, AdminLayout } from './layout';
import { DatePicker } from 'antd';
import { AdminLogin } from './layout/admin';
import { Route, Router, Routes } from 'react-router-dom';

import { adminRoutes, privateRoutes } from './routes';

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
    // <UserLayout>
    //   <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         {/* <div className="main_slide_content">
    //           Hello
    //         </div> */}
    //         <img className="d-block w-100" src="http://themes.pixelstrap.com/multikart/assets/images/furniture/banner/1.jpg" alt="First slide" />
    //       </div>
    //       <div className="carousel-item">
    //         <img className="d-block w-100" src="http://themes.pixelstrap.com/multikart/assets/images/home-banner/22.jpg" alt="Second slide" />
    //       </div>
    //     </div>

    //     <a className="carousel-control carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span className="sr-only">Previous</span>
    //     </a>
    //     <a className="carousel-control carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span className="sr-only">Next</span>
    //     </a>
    //   </div>
    // </UserLayout>
  );
}

export default App;
