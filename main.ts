import versionOne from './src/applications/json-to-html/assets/jsons/version-one.json'
import { jsonToHtml } from './src/applications/json-to-html'

document.addEventListener('DOMContentLoaded', () => {
  const html = jsonToHtml({ json: versionOne })
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = html
})
