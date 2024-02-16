import {createHashRouter} from "react-router-dom";
import {Root} from "./Root";
import {NoMatch} from "./NoMatch";
import {Home, TestPage, MyVariableTables} from "../pages";
import {Navigate} from "react-router-dom";
export const MyRouter = createHashRouter([
    {
        path: "/",
        element: <Navigate to="/chicago_crime_viz" replace/>,
        errorElement: <NoMatch/>
    },
    {
        path: "chicago_crime_viz",
        element: <Root/>,
        children: [
            {
              index: true,
              element: <Home/>
            },
            {
                path: "example-page",
                element: <TestPage />
            },
            {
                path: "dataset",
                element: <MyVariableTables/>
            },
        ],
    },
    {
        future: {
            v7_normalizeFormMethod: true,
        },
    }
]);