'use server'
const url="https://aula-17-10-inky.vercel.app";

const getUserAuthenticated = async (user) => { 
   
   const responseOfApi = await fetch(url + "/user/authenticated",
    
   {
      method:'POST',
      headers:{"content-type": "Application/json"},
      body: JSON.stringify(user)
    }

   );

   const userAuth = await responseOfApi.json();
   console.log(userAuth)
   return userAuth;
    
 }
 
 const getUsers = async() =>{
    const responseOfApi = await fetch(url + '/users', {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })
    const users = await responseOfApi.json();
    return users;
 }

 export {getUsers, getUserAuthenticated}
