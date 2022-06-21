import { Injectable } from "@nestjs/common";



@Injectable()
export class AuthService {
    
    signUp (){
        return 'I have sighned up';

   }

   login () {
    return 'I have logged in';

   }
}