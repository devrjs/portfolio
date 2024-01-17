'use client'

import { ArrowRight } from '@phosphor-icons/react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'
import { Button } from './ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

export function PortfolioCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  )

  const portfolioData: Array<object> = []
  // [
  //   {
  //     image: '/portfolio1.png',
  //     title: 'UPLOAD.AI',
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus repellendus officia minima maiores a natus exercitationem molestiae porro laboriosam labore.',
  //     link: 'https://github.com/devrjs',
  //   },
  //   {
  //     image: '/portfolio2.png',
  //     title: 'Spacetime',
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus repellendus officia minima maiores a natus exercitationem molestiae porro laboriosam labore.',
  //     link: 'https://github.com/devrjs',
  //   },
  // ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="grid w-full grid-cols-[min-content_1fr_min-content] gap-x-2 px-2"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselPrevious className="static w-4 translate-x-0 translate-y-0 place-self-center border border-primary text-primary hover:text-primary-foreground sm:w-8" />
      <CarouselContent>
        {portfolioData.length > 0 ? (
          portfolioData.map((portfolio, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-1 gap-x-20 gap-y-6 md:grid-cols-2">
                <AspectRatio ratio={16 / 9} asChild>
                  <Image
                    src={portfolio.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    // quality={100}
                    unoptimized
                    priority
                    className="h-full w-full rounded-lg object-cover"
                    alt=""
                  />
                </AspectRatio>

                <div className="flex flex-col justify-center gap-2">
                  <h3 className="text-xl font-bold text-accent-foreground">
                    {portfolio.title}
                  </h3>
                  <p className="text-base">{portfolio.description}</p>
                  <Button asChild className="mt-2 h-12 w-fit text-base">
                    <Link href={portfolio.link} target="_blank">
                      Demo{' '}
                      <ArrowRight className="ml-2" size={18} weight="bold" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))
        ) : (
          <span className="flex min-h-28 w-full items-center justify-center">
            Nenhum projeto disponível no momento.
          </span>
        )}
      </CarouselContent>
      <CarouselNext className="static w-4 translate-x-0 translate-y-0 place-self-center border border-primary text-primary hover:text-primary-foreground sm:w-8" />
    </Carousel>
  )
}
