import { Body, Controller, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request } from "express";
import { AuthService } from "./auth.service";
import {AuthDto} from './auth.dto'

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService) { }

    @Post('signup')
    @UsePipes(new ValidationPipe({transform: true}))
    signUp(@Req() req: Request, @Body() body:AuthDto){
        console.log(req.headers, req.body, body)
        return this.authService.signUp(body);
    }

    @Post('signin')
    login(){
        return this.authService.login();
    }

    @Post()
    createUser(){
        return 'user'
    }
   
}