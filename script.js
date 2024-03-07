
function Sign_up(e){
    e.preventDefault();

    let username = document.getElementById('username')
    let password = document.getElementById('password')
    let confirm_ = document.getElementById('confirm')
    
    if (username.value == '' || password.value == '' || confirm_.value == '') {
        alert('Vui lòng nhập đầy đủ thông tin')
        return
    }
    if (password.value != confirm_.value) {
        alert('Mật khẩu nhập lại không đúng')
        confirm_.value = null
        return
    }
    const user = {
        username: username.value,
        password: password.value,
        confirm: confirm_.value
    }
    let data = JSON.stringify(user)
    localStorage.setItem(username.value, data)

    alert('Dang ky thanh cong')
}

function Login(e){
    e.preventDefault();
    
    let username = document.getElementById('username_login')
    let password = document.getElementById('password_login')
    
    if (username.value == '' || password.value == '') {
        alert('Vui lòng nhập đầy đủ thông tin')
        return
    }
    let data = localStorage.getItem(username.value)
    let user = JSON.parse(data)
    if(!user){
        alert('Sai thông tin đăng nhập');
    }
    else if ( user.username == username.value && user.password == password.value) {
        alert('Dang nhap thanh cong')
        window.location.href = 'https://www.facebook.com/'
    }
    else {
        alert('Sai thông tin đăng nhập');
    }
}
let form_signup = document.querySelector('#form_signup');
if (form_signup != null) 
    form_signup.addEventListener('submit', Sign_up);

let form_login = document.querySelector('#form_login');
if(form_login != null)
    form_login.addEventListener('submit', Login);
