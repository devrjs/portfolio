import {
  JetBrains_Mono as FontMono,
  Poppins as FontSans,
} from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
})

export const fontMono = FontMono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
})
