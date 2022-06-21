import { Injectable } from "@nestjs/common";
import { AuthDto } from "./auth.dto";


@Injectable()
export class AuthService {
    
    
    signUp (payload: AuthDto){
        return  payload;

   }

   login () {
    return 'I have logged in';

   }
}