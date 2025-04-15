import { Test, TestingModule } from '@nestjs/testing'
import { GenerateHtmlController } from './generate-html.controller'

describe('GenerateHtmlController', () => {
  let controller: GenerateHtmlController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenerateHtmlController],
    }).compile()

    controller = module.get<GenerateHtmlController>(GenerateHtmlController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
