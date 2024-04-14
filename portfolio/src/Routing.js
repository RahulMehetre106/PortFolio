import Project from "./Module/Component/Project/Project";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("./Module/Component/Home/Home");

const Routing = createBrowserRouter ([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'project',
                element:<Project/>
            }
        ]
    }
])
export default Routing;