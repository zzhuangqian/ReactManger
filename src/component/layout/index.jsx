import React, { Component } from 'react'
import NavSlide from "component/nav-slide/index.jsx"
import NavTop from 'component/nav-top/index.jsx'


class Layout extends Component{

    render(){
        return (
            <div id="wrapper">
                <NavSlide></NavSlide>
                <NavTop></NavTop>
            </div>
        )
    }
}
export default Layout