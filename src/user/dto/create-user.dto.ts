import { isString } from 'class-validator';

export class CreateUserDto {

    name: string;

   
    username: string;

  
    password: string;

  
    role: string;
}
