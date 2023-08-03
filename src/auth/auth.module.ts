import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './entity/users.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './security/passport.jwt.strategy';
import { PointsModule } from 'src/points/points.module';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.DATABASE_SECRET_KEY,
      signOptions: { expiresIn: '300s' },
    }),
    PassportModule,
    PointsModule,
  ],
  exports: [TypeOrmModule, JwtStrategy, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtStrategy],
})
export class UsersModule {}
