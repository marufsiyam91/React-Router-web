import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Service from '../Pages/Service/Service'
import Contact from '../Pages/Contact/Contact'
import NotFound from '../Pages/NotFound/NotFound'
import LogIn from '../Pages/LogIn/LogIn'
import Users from '../Pages/Users/Users'
import UserDetail from '../Pages/UserDetail/UserDetail'



const Routes = createBrowserRouter([
     {
          path: "/",
          element: <App/>,
          children: [
               {
                    path: "/",
                    element: <Home/>
               },
               {
                    path: "/About",
                    element: <About/>
               },
               {
                    path: "/Service",
                    element: <Service/>
               },
               {
                    path: "/Contact",
                    element: <Contact/>
               },
               {
                    path: 'Users',
                    element: <Users/>,
                    loader: () =>fetch('https://jsonplaceholder.typicode.com/users')
               },
               {
                    path: 'Users/:Userid',
                    element: <UserDetail/>,
                    loader: ({ params }) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.Userid}`)
               },
               {
                    path: "/Log-in",
                    element: <LogIn/>
               }
          ]
     },
     {
          path: "*",
          element: <NotFound/>
     }
     
])

export default Routes