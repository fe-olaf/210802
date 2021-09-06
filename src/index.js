import Router from './router'

import MyPage from './pages/main'
import SigninPage from './pages/signin'
import MainPage from './pages/main'

const ROUTES = {
    '/': MainPage,
    '/signin': SigninPage,
    '/my': MyPage
}

class App {
    constructor() {
        this.router = new Router({
            app: document.getElementById('app'),
            routes: ROUTES
        })
    }
}

new App()

