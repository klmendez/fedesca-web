import Hero from '@/sections/home/Hero'
import About from '@/sections/home/About'
import Oferta from '@/sections/home/Oferta'
import ContactCTA from '@/sections/home/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Oferta />
      <About />
      
      <ContactCTA />
    </>
  )
}
