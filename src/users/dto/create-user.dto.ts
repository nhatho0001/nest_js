import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";
export class createUserDto {
    @IsString()
    @IsNotEmpty()
    name : string;


    @IsEmail()
    @IsNotEmpty()
    mail : string;

    @IsEnum(['ADMIN' , 'ENGINEER' , 'INTERN'])
    role : 'ADMIN' | 'ENGINEER' | 'INTERN';

    @IsInt()
    age : number;
}