import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGO_URI ||
        'mongodb+srv://alaachibapr:JmcxOcV0EyVSNuBP@cluster0.kuwydf4.mongodb.net/nestTest?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UsersModule,
  ],
})
export class AppModule {}
