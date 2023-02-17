//1.import area
import { Component } from "react"
//1.1 import {somenamedimport} from some location/library
//1.2 import somedefault export from some location/lobrary

//2. class Component defination area
export class ComponentG extends Component {   //extends keword used to inherit the properties and methods of the parent
		
    //1. properties

    
    //2. constructor 
        //constructor method is used to intialize the properties


    //3. methods 
        //every class component must have render method
        
    render(){

        //every method should return something
        return(
            <h1>I am from Component G</h1>
        )

    }
}

//3. export area
//3.1 default export
//3.2 named export