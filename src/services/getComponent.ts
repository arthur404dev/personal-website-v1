import { NavigationLink } from "../types"

const componentExtractor = (
  componentName: string,
  list: NavigationLink[],
): NavigationLink =>
  list.find((el) => el.identificator === componentName) || {
    identificator: componentName,
    displayName: componentName,
    id: Number(componentName + Math.random() * 999999).toString(),
    isButton: false,
    target: componentName,
  }

export default componentExtractor
