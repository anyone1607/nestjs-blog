import { Controller } from '@nestjs/common';

@Controller('user')
export class UserController {}
// nhận các request từ routers (public router) --> trả ra các respone cho client thông qua(HTTP status code)