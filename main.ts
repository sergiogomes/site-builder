import versionOne from './src/assets/jsons/version-one.json'
import { jsonToHtml } from './src/json-to-html'

document.addEventListener('DOMContentLoaded', () => {
  const html = jsonToHtml({ json: versionOne })
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = html
})
