import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GenerateHtmlModule } from './generate-html/generate-html.module';

@Module({
  imports: [GenerateHtmlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
