import { Module } from '@nestjs/common'
import { GenerateHtmlController } from './generate-html.controller'
import { GenerateHtmlService } from './generate-html.service'

@Module({
  controllers: [GenerateHtmlController],
  providers: [GenerateHtmlService],
})
export class GenerateHtmlModule {}
