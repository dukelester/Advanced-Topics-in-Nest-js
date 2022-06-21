import { Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService) { }

    @Post('signup')
    signUp(@Req() req: Request){
        console.log(req.headers)
        return this.authService.signUp();
    }

    @Post('signin')
    login(){
        return this.authService.login();
    }
   
}