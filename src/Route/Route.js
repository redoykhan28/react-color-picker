import { createBrowserRouter } from "react-router-dom";
import ColorPicker from "../Component/ColorPicker";
import Home from "../Component/Home";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/home',
        element: <Home></Home>
    },
    {
        path: '/colorPicker',
        element: <ColorPicker></ColorPicker>
    },
])

export default router


