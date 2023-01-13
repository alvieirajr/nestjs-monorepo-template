import { Controller, Get } from '@nestjs/common';
import { HttpService } from '../services/http.services'; 
import { AuthenticatedUser, Unprotected, Public, Roles, RoleMatchingMode } from 'nest-keycloak-connect';

@Controller()
export class HttpController {
  constructor(private readonly httpService: HttpService) {}

  @Unprotected()
  getpublic(): string {
  return `${this.httpService.getHello()} from public`;
  }

  @Get('/user')
  @Roles({ roles: ['admin', 'other'] })
  getUser(): string {
  return `${this.httpService.getHello()} from user with roles: 'admin' or 'other'`;
  }
  
  @Get()
  @Public(false)
  getHello(@AuthenticatedUser() user: any): string {
    return this.httpService.getHello();
  }

  @Get('private')
  getPrivate() {
    return 'Authenticated only!';
  }

  @Get('admin')
  @Roles({ roles: ['admin'], mode: RoleMatchingMode.ALL })
  adminRole() {
    return 'Admin only!'
  }
}


