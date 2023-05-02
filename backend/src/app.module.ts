import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ApiModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../assets'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
