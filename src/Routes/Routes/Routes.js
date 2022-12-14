import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Main from "../../layout/Main";
import NavHome from "../../NavHome/NavHome";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://abrar-s-learning-school-server.vercel.app/news`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://abrar-s-learning-school-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({params}) => fetch(`https://abrar-s-learning-school-server.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/NavHome',
                element: <NavHome></NavHome>
            },
            {
                path: '/Blog',
                element: <Blog></Blog>
            }
        ]
    }
])