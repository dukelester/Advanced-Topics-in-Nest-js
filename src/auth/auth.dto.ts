import {IsEmail, IsNotEmpty, IsBoolean} from 'class-validator'

export class AuthDto {

    @IsEmail()
    emailAddress :string;

    @IsNotEmpty()
    phone_number: string

    @IsNotEmpty()
    full_name : string

    @IsBoolean()
    registered: boolean


}