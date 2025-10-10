import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  signIn() {
    return { message: 'Admin signed in successfully' };
  }
}
