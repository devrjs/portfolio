import { Blob } from '@/components/Blob'
import { PortfolioCarousel } from '@/components/PortfolioCarousel'
import { SkillsSlide } from '@/components/SkillsSlide'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { siteConfig } from '@/config/site'
import { skillsBackend, skillsFrontend } from '@/config/skills'
import {
  BracketsCurly,
  Download,
  HardDrives,
  PaperPlaneRight,
} from '@phosphor-icons/react/dist/ssr'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
  return (
    <main className="flex w-full flex-col items-center justify-center px-4">
      <section
        id="home"
        className="grid max-w-3xl grid-cols-[min-content_1fr] gap-8 pb-4 pt-14 sm:grid-cols-[max-content_1fr_1fr] md:pt-40"
      >
        <div className="flex flex-col justify-center gap-4 lg:-translate-x-24">
          <Link href={siteConfig.links.github} target="_blank">
            <GitHubLogoIcon className="h-6 w-6 text-primary" />
          </Link>

          <Link href={siteConfig.links.linkedin} target="_blank">
            <LinkedInLogoIcon className="h-6 w-6 text-primary" />
          </Link>
        </div>

        <Blob className="w-full max-w-[250px] place-self-center fill-primary sm:order-1 md:max-w-[320px]" />

        <div className="col-span-2 flex flex-col justify-center gap-4 sm:col-span-1">
          <h1 className="text-2xl font-semibold text-accent-foreground md:text-3xl lg:text-4xl">
            Olá, sou o Vitor
          </h1>
          <h3 className="text-lg font-medium">
            Desenvolvedor Front-end/Full Stack
          </h3>
          <p>
            Construindo aplicativos web responsivos e dinâmicos com React,
            TypeScript, TailwindCSS e outras tecnologias modernas.
          </p>

          <Button asChild className="mt-4 h-14 w-fit">
            <Link href="#contact">
              Entrar em contato <PaperPlaneRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>

      <section
        id="about"
        className="flex max-w-3xl flex-col items-center pb-4 pt-20 md:pt-28"
      >
        <h2 className="text-2xl font-semibold text-accent-foreground">
          Sobre Mim
        </h2>
        <span className="mb-12 text-sm">Introdução</span>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-6 sm:order-1">
            <p>
              Iniciando na área de tecnologia após concluir meu Bacharelado em
              Análise e Desenvolvimento de Sistemas, busco ansiosamente minha
              primeira oportunidade para aplicar meus conhecimentos acadêmicos e
              paixão por desenvolvimento de software.
            </p>

            <Button asChild className="h-14 w-fit">
              <Link download="" href="/CV_Vitor.pdf">
                Download CV <Download className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>

          <AspectRatio ratio={4 / 3} asChild>
            <Image
              src="/about.png"
              width={0}
              height={0}
              sizes="100vw"
              // quality={100}
              unoptimized
              priority
              className="h-full w-full rounded-lg object-cover md:max-w-[344px]"
              alt=""
            />
          </AspectRatio>
        </div>
      </section>

      <section
        id="skills"
        className="flex w-screen max-w-[968px] flex-col items-center pb-4 pt-20 md:pt-28"
      >
        <h2 className="text-2xl font-semibold text-accent-foreground">
          Habilidades
        </h2>
        <span className="mb-12 text-sm">Tecnologias</span>

        <div className="mb-20 grid w-full max-w-3xl grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <div className="mb-2 flex items-center gap-4">
              <BracketsCurly size={40} className="text-primary" />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold text-accent-foreground">
                  Desenvolvimento front-end
                </h1>
                <span>Mais de 1 ano</span>
              </div>
            </div>

            {skillsFrontend.map((skill, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h3 className="font-bold text-accent-foreground">
                    {skill.name}
                  </h3>
                  <span>{skill.percentage}%</span>
                </div>
                <Progress value={skill.percentage} />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div className="mb-2 flex items-center gap-4">
              <HardDrives size={40} className="text-primary" />
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold text-accent-foreground">
                  Desenvolvimento back-end
                </h1>
                <span>Mais de 1 ano</span>
              </div>
            </div>

            {skillsBackend.map((skill, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h3 className="font-bold text-accent-foreground">
                    {skill.name}
                  </h3>
                  <span>{skill.percentage}%</span>
                </div>
                <Progress value={skill.percentage} />
              </div>
            ))}
          </div>
        </div>

        <SkillsSlide />
      </section>

      <section
        id="portfolio"
        className="flex w-screen max-w-3xl flex-col items-center pb-4 pt-20"
      >
        <h2 className="text-2xl font-semibold text-accent-foreground">
          Portfólio
        </h2>
        <span className="mb-12 text-sm">Trabalho mais recente</span>

        <PortfolioCarousel />
      </section>

      <section
        id="contact"
        className="flex w-screen max-w-3xl flex-col items-center pb-4 pt-20 md:pt-28"
      >
        <h2 className="text-2xl font-semibold text-accent-foreground">
          Entre em Contato
        </h2>
        <span className="mb-12 text-sm">Formas de contato</span>
        <span className="">🛠️ Em construção 🏗️</span>
      </section>
    </main>
  )
}
