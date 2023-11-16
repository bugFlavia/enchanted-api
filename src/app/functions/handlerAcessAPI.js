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
        next: {revalidate: 1},
        headers: {"Content-Type": "application/json"}
    })
    const users = await responseOfApi.json();
    return users;
 }

 const postUser = async(user)=>{
   try{
      const responseOfApi = await fetch(url + "/user", {
         method: "Post",
         headers: {'Content-Type': 'Application/json'},
         body: JSON.stringify(user)
      });
      const userSave = await responseOfApi.json();
      return userSave
   }
   catch{
      return null
   }
 }

 export {getUsers, postUser, getUserAuthenticated}
