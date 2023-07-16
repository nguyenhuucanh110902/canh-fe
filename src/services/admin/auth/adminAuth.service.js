import { localStorageService } from "../../common";
import { adminClient } from "../http";

const ADMIN_AUTH_INFO_KEY = 'ADMIN_AUTH_INFO';

class AuthService {
    async login(loginForm){
        try {
            return await adminClient.post('/mv-core/v1/auth/login', loginForm);
        } catch (error) {
            
        }
    }

    saveAuthInfo(authInfo) {
        localStorageService.setItem(ADMIN_AUTH_INFO_KEY, authInfo);        
    }

    getAuthInfo() {
        return localStorageService.getItem(ADMIN_AUTH_INFO_KEY);
    }

    isLogin() {
        return this.getAuthInfo();
    }

    logout() {
        localStorageService.remove(ADMIN_AUTH_INFO_KEY);
    }

    getAccessToken() {
        return this.getAuthInfo()?.token || undefined;
    }
    

}



export default new AuthService();