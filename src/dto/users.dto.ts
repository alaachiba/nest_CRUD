import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class userDto {
    @IsNotEmpty()
    fullName: string;

    @IsEmail()
    email: string;

    @IsNumber()
    age: number;

    @IsNotEmpty()
    country: string;


}