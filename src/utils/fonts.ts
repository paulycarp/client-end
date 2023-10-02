import { Poppins, Catamaran, Raleway } from 'next/font/google'

  export const poppins = Poppins({
    weight: ['400', '600'],
    subsets: ['latin'],
    variable: '--font-poppins',
  })
  
  export const catamaran = Catamaran({
    weight: ['100', '400', '700'],
    subsets: ['latin'],
    variable: '--font-catamaran',
  })
  
  export const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-raleway',
  })