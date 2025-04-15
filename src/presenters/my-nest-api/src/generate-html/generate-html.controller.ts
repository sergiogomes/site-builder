import { Controller, Post, Body, Get } from '@nestjs/common'
import { GenerateHtmlService } from './generate-html.service'

@Controller('generate-html')
export class GenerateHtmlController {
  constructor(private readonly generateHtmlService: GenerateHtmlService) {}

  @Get()
  getGenerateHtml(): string {
    return 'Only POST requests are allowed'
  }

  @Post()
  postGenerateHtml(@Body() body: any): string {
    // Pass the JSON body to the service for processing
    return this.generateHtmlService.generateHtml(body)
  }
}
