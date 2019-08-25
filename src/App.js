import React from 'react';
import {Provider} from 'react-redux';
import {GlobalStyle} from './style.js';
import {GlobalIconfontStyle} from './statics/iconfont/iconfont.js';
import Header from './common/header/index';
import store from './store';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <GlobalIconfontStyle/>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/detail/:id' exact component={Detail}></Route>
                </div>

            </BrowserRouter>
        </Provider>
    );
}

export default App;
