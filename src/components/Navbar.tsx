'use client'

import { siteConfig } from '@/config/site'
import { Moon, SquaresFour, Sun, X } from '@phosphor-icons/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState } from 'react'
import { Navlinks } from './Navlinks'
import { Button } from './ui/button'

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [openNav, setOpenNav] = useState(false)

  function handleNav() {
    setOpenNav(!openNav)
    console.log(openNav)
  }

  return (
    <header className="fixed bottom-0 left-0 z-20 flex h-12 w-full justify-center gap-2 bg-background text-sm font-medium text-accent-foreground shadow-[0_-1px_4px_rgba(0,0,0,0.15)] md:top-0 md:h-16 md:px-4 md:shadow-none">
      <nav className="flex w-[968px] items-center justify-between gap-4">
        <Link
          href="#"
          className="ml-6 flex h-full w-28 items-center font-bold md:ml-0"
        >
          Vitor Gomes
        </Link>

        <div
          className={`fixed w-full rounded-t-3xl bg-background px-1 pb-16 pt-8 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] sm:px-6 md:static md:flex md:h-full md:items-center md:justify-end md:p-0 md:shadow-none md:transition-none
          ${
            openNav
              ? 'bottom-0 duration-300 ease-in-out'
              : '-bottom-full duration-300 ease-in-out'
          }
          `}
        >
          <ul className="grid grid-cols-3 gap-8 gap-x-0 sm:gap-8 md:flex">
            <Navlinks items={siteConfig.navLinks} />
          </ul>

          <X
            className="absolute bottom-3 right-6 h-6 w-6 md:hidden"
            onClick={handleNav}
          />
        </div>

        <div className="mr-6 flex items-center justify-center gap-2 md:mr-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
            <Moon className="hidden h-5 w-5 dark:block" />
          </Button>

          <SquaresFour className={`h-6 w-6 md:hidden`} onClick={handleNav} />
        </div>
      </nav>
    </header>
  )
}
