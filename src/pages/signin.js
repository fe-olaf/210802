
class SigninPage {
    constructor(props) {
        this.props = props
    }

    componentBindEvent() {
        const _emailEl = document.getElementById('email')
        const _pwEl = document.getElementById('password')

        document.getElementById('btn_submit').addEventListener('click', async (e) => {
            const email = _emailEl.value 
            const password = _pwEl.value 

            if (!email || !password) {
                window.alert('필수 정보를 모두 입력해주세요.')
                return 
            }

            try {
                const response = await fetch('http://localhost:3000/users')
                const users = await response.json()

                console.log('users', users)      
                
                const user = users.find((user) => user.email === email && user.password === password)

                if (!user) {
                    window.alert('입력하신 정보를 확인해주세요.')
                    return 
                }

                // 로그인 성공 !!
                this.props.router.push('/')

            } catch(e) {
                window.alert('일시적인 에러가 발생했습니다. 잠시 후 다시 시도해주세요.')
            }
        })
    }

    render() {
       return `<div>
                <input type="text" id="email" />
                <input type="password" id="password" />
                <button id="btn_submit">로그인</button>
            </div>`
    }
}

export default SigninPage