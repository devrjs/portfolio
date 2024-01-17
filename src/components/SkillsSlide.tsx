'use client'

import { skillIcons } from '@/config/skills'
import Image from 'next/image'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export function SkillsSlide() {
  return (
    <div className="flex w-full flex-col gap-8 py-12 lg:rounded-2xl dark:bg-card">
      <Swiper
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        breakpoints={{
          350: {
            slidesPerView: 3,
          },
          568: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
        }}
        className="w-full"
      >
        {skillIcons.map((skill, index) => (
          <SwiperSlide key={index} className="self-center">
            <Image
              src={skill.Image}
              alt={skill.name}
              width={0}
              height={0}
              sizes="100vw"
              // quality={100}
              unoptimized
              priority
              style={{ width: `${skill.width}px`, height: 'auto' }}
              className="mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={5000}
        modules={[Autoplay]}
        breakpoints={{
          350: {
            slidesPerView: 3,
          },
          568: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
        }}
        className="w-full"
      >
        {skillIcons.map((skill, index) => (
          <SwiperSlide key={index} className="self-center">
            <Image
              src={skill.Image}
              alt={skill.name}
              width={0}
              height={0}
              sizes="100vw"
              // quality={100}
              unoptimized
              priority
              style={{ width: `${skill.width}px`, height: 'auto' }}
              className="mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
