import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Home from 'page/home/index.jsx'
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router'
import Layout from 'component/Layout/index.jsx'
class App extends Component{
    render(){
        return (
         <Layout>

             
         </Layout>
        )  
    }
}

ReactDOM.render(<App></App>,document.getElementById('root'))
 