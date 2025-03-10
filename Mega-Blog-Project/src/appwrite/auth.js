import conf from "../conf/conf";
//Client and Account from Appwrite SDK are used to interact with Appwrite's services.
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client();
    account;

//The constructor sets up the client using configuration values (conf.appwriteUrl and conf.appwriteProjectId).
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
           const userAccount = await this.account.create(ID.unique(), email, password, name)
           if(userAccount){
            //user another method
            return this.login(email, password)
           } else {
            return userAccount
           }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
           return await this.account.get(); 
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
            return false
        }
    }
}

const authService = new AuthService()

export default authService