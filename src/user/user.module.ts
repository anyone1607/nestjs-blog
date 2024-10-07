import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  // controllers: [],
  // exports: [UserService],
  // imports: [], 
  // dong goi cac logic tu controller đến client
})
export class UserModule {}
