import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Profile } from './entity/profile.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Profile])],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
