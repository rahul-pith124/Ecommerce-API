import {
  IsAlphanumeric,
  IsEmail,
  isString,
  IsString,
  IsStrongPassword,
  min,
} from 'class-validator';

export class SignInDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minUppercase: 1,
    minSymbols: 1,
    minNumbers: 1,
  })
  password: string;
}
