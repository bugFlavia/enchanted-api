'use server'

const usuarios = [
    {name:"Flavia", email:"verdade@concordo", password:"renatao", token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"},
    {name:"Renato", email:"renatao@calvo.minoxidil", password:"ciso", token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw8F"}
]

const getUserAuthenticated = (user) => {
    let userAuth = {};
    usuarios.map((e) => {
        if(e.email === user.email && e.password === user.password){
            userAuth = e;
        };
    })
    return userAuth;
}

const getUsers = () =>{
        return usuarios
}
export { getUsers, getUserAuthenticated };
