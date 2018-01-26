import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';



let HeaderTopBarOne = () => {
    return (
        <div className="header-top-bar">
            <div className="container flex-content-between-sm flex-align-center">
                <input className="input-search resp-ind-sm" type="text" placeholder="Search"/>
                <ul className="flex-content-between">
                    <li><a href="" className="a-login">login</a></li>
                    <li className="indent-left-35"><a href="" className="a-register">Register</a></li>
                </ul>
            </div>
        </div>
    )
};
let HeaderTopBarTwo = () => {
    return (
        <div className="header-top-bar">
            <div className="container flex-content-between-sm flex-align-center">
                <div className="flex-content-between-sm">
                    <input className="input-search resp-ind-sm" type="text" placeholder="Search"/>
                        <ul className="flex-content-between flex-align-center indent-left-30 resp-ind-md">
                            <li><a href="" className="a-login">login</a></li>
                            <li className="indent-left-30"><a href="" className="a-like">wishlist</a></li>
                            <li className="indent-left-30"><a href="" className="a-logout">log out</a></li>
                        </ul>
                </div>
                <a href="" className="a-cart">26 items in Cart</a>
            </div>
        </div>
    )
};


class Header extends React.Component {
    render() {
        return (
            <header className="flex-dir-cn-r-sm">
                <Switch>
                    <Route exact path='/' component={HeaderTopBarOne}/>
                    <Route exact path='/blogpost' component={HeaderTopBarOne}/>
                    <Route exact path='/blog' component={HeaderTopBarOne}/>
                </Switch>
                <Route exact path='/pages' component={HeaderTopBarTwo}/>
                <div className="header-bottom-bar">
                    <nav className="navbar navbar-expand-md navbar-light bg-light">
                        <div className="container flex-content-between">
                            <div className="wrap-logo">
                                <img className="max-width" src="img/logo.png" alt="Amber"/>
                                    <h1 className="indent-text-hide">Amber</h1>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="flex-content-between-sm nav-top">
                                    <li>
                                        <Link to={'/'}  className="nav-link">home</Link>
                                    </li>
                                    <li>
                                        <Link to={'/blogpost'}  className="nav-link">typografy</Link>
                                    </li>
                                    <li>
                                        <Link to={'/blog'}  className="nav-link">blog</Link>
                                    </li>
                                    <li>
                                        <Link to={'/pages'} className="nav-link">pages</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}  className="nav-link">elements</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="nav-link">ecomerse</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="nav-link">megamenu</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Header