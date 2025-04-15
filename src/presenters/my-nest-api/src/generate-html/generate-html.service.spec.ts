import { Test, TestingModule } from '@nestjs/testing'
import { GenerateHtmlService } from './generate-html.service'

describe('GenerateHtmlService', () => {
  let service: GenerateHtmlService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateHtmlService],
    }).compile()

    service = module.get<GenerateHtmlService>(GenerateHtmlService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
