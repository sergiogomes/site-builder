import { Injectable } from '@nestjs/common'

import { jsonToHtml } from '../../../../applications/json-to-html/index'
// import { jsonToHtml } from '@json-to-html/index.js'

// src/applications/json-to-html/index.ts
// src/presenters/my-nest-api/src/generate-html/generate-html.service.ts
@Injectable()
export class GenerateHtmlService {
  generateHtml(data: any): string {
    // Process the JSON data and generate HTML
    return jsonToHtml(data)
  }
}
