import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated} from "./handlerAcessAPI";
const handlerAcessUser = async (user) => {

    const {userAuth, nomeUsuario} = await getUserAuthenticated(user);
    
    const isTokenValidate = validateToken(userAuth.token);

    if (isTokenValidate) {
        Cookies.set('token', userAuth.token, { expires: 1 });
        localStorage.setItem('nomeUsuario', nomeUsuario);
    }
    return {userAuth, nomeUsuario};
}
export default handlerAcessUser;

