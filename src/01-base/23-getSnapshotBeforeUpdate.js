import React, { Component } from 'react'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritesite: "runoob" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritesite: "google" })
        }, 1000)
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
            "在更新前喜欢的网站是：" + prevState.favoritesite;
        return {
            favoritesite: 12
        }
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "更新后喜欢的网站是：" + this.state.favoritesite;
    }
    render() {
        return (
            <div>
                <h1>我喜欢的网站是 {this.state.favoritesite}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}