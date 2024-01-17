import { siteConfig } from '@/config/site'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export function Footer() {
  const links = siteConfig.navLinks.filter(
    (item) =>
      item.href === '#services' ||
      item.href === '#portfolio' ||
      item.href === '#contact',
  )

  return (
    <footer className="flex w-full flex-col gap-16 bg-secondary px-4 pb-14 pt-12 text-primary-foreground md:items-center md:justify-center md:px-0">
      <div className="grid max-w-[768px] grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-[1fr_max-content_1fr]">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Vitor Gomes</h1>
          <span>Front-end developer</span>
        </div>

        <ul className="flex flex-col gap-8 md:flex-row">
          {links.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.title}
            </Link>
          ))}
        </ul>

        <div className="flex gap-6 md:justify-end">
          <Link href={siteConfig.links.github} target="_blank">
            <GitHubLogoIcon className="h-6 w-6 text-primary-foreground" />
          </Link>

          <Link href={siteConfig.links.linkedin} target="_blank">
            <LinkedInLogoIcon className="h-6 w-6 text-primary-foreground" />
          </Link>
        </div>
      </div>

      <p className="self-center text-sm text-muted-foreground">
        &#169; Todos os direitos reservados.
      </p>
    </footer>
  )
}
