type jsonToHtmlProps = {
  json: string;
}
export function jsonToHtml(props: jsonToHtmlProps): string {
  const { json } = props

  // Map trhough the json sections and call the component generator for each section and return the html

  return json
}
