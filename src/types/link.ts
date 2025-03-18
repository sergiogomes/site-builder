export type LinkProps = {
  text: string
  target?: string
  href?: string
  anchor?: string
} & (
  | { href: string; anchor?: string }
  | { href?: string; anchor: string }
)
