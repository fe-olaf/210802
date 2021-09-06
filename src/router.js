 /**
 * Router는 정해진 path 와 그에 맞는 component 를 노출한다.
 */
class Router { 
    /**
     * app: 실제 돔이 그려질 곳
     * routes: path 에 따라 그려질 컴포넌트
     */
    constructor({ app, routes }) {
        this.app = app
        this.routes = routes
    
        this.componentBindEvent()
        this.render()
    }

    componentBindEvent() {
        window.onhashchange = () => {
            this.render()
        }
    }


    push(pathName) {
        window.location.hash = pathName.replace('/', '#')
    }

    render() {
        const path = window.location.hash.replace('#', '/') || '/'

        const Component = this.routes[path] ? new this.routes[path]({
            router: {
                push: this.push
            }
        }) : null

        if (!Component) {
            // Error Page
            this.app.innerHTML = `<h1> 찾으시는 페이지가 없습니다 </h1>`
            return 
        }

        this.app.innerHTML = Component.render()

        if (Component.componentBindEvent) {
            Component.componentBindEvent()
        }
    }
}

export default Router

