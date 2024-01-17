'use client'

import * as Icons from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { createElement, useEffect, useState } from 'react'

interface NavlinksProps {
  items?: Array<{
    title: string
    href: string
    icon: string
  }>
}

export function Navlinks({ items }: NavlinksProps) {
  const [currentSection, setCurrentSection] = useState('')

  const iconMap = Object.entries(Icons).reduce(
    (map, [key, value]) => {
      map[key] = value
      return map
    },
    {} as Record<string, React.ComponentType<any>>,
  )

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY + 200
      let currentSectionId = ''

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionBottom = section.offsetTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSectionId = section.id
        }
      })

      setCurrentSection(currentSectionId)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {items?.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center ${
            currentSection === item.href.slice(1) && 'text-primary'
          }`}
        >
          {createElement(iconMap[item.icon], {
            className: 'h-6 w-6 md:hidden',
          })}
          {item.title}
        </Link>
      ))}
    </>
  )
}
