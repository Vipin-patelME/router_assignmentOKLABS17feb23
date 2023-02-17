//1.import area
import { Link } from "react-router-dom"

//1.1 import {somenamedimport} from some location/library

//1.2 import somedefault export from some location/lobrary

//2. functional Component defination area
export const ComponentB = ()=>{
    // every function should return something
    return(
        <div>
            <Link to="/a">I am from ComponentB </Link>
        </div>
    )
}