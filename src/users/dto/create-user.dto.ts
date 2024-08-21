import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({message: "Name khong duoc de trong"})
  name: string;
  
  @IsNotEmpty({message: "email khong duoc de trong"})
  @IsEmail({},{message:"email không đúng định dạng"})
  email: string;

  @IsNotEmpty({message: "password khong duoc de trong"})
  password: string;

  @IsNotEmpty()
  address: string;



}
