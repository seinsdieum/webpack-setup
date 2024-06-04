import {createRoot} from "react-dom/client";
import App from "./components/App/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About/About";
import Hello from "./components/Hello/Hello";
import {Suspense} from "react";
import {LazyAbout} from "@/components/About/About.lazy";
import {LazyHello} from "@/components/Hello/Hello.lazy";

const root = document.getElementById('root')

if(!root) {
    throw new Error('root not existing')
}

const container = createRoot(root)


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'about',
                element: <Suspense fallback={'loading'}><LazyAbout></LazyAbout></Suspense>
            },
            {
                path: 'hello',
                element: <Suspense><LazyHello></LazyHello></Suspense>
            }
        ]
    }
])

container.render(<RouterProvider router={router}/>)
