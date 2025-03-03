export type linkProps = {
  text: string
  target?: string
  href?: string
  anchor?: string
} & (
  | { href: string; anchor?: string }
  | { href?: string; anchor: string }
)
