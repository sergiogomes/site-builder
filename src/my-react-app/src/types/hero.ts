import { ImageProps } from "./image"
import { LinkProps } from "./link"

export type HeroProps = {
  title?: string
  image?: ImageProps
  cta?: LinkProps
} & (
  | { title: string }
  | { image: ImageProps }
  | { cta: LinkProps }
)
