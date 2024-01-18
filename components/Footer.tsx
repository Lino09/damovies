import Image from "next/image";

const Footer = () => (
  <footer className="bg-gradient-to-b from-dacolors-purple via-dacolors-blue to-dacolors-cyan relative px-4 lg:px-36 text-white">
   <div className="shape-divider">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
  </div>
  <div className="pt-40 flex flex-col gap-8 items-start pb-12">
    <span className="text-2xl font-semibold block">We are coding the world of tomorrow_</span>
    <p className="w-3/4 md:w-1/2 text-lg">DaCodes es una de las mejores empresas de desarrollo de software en México y LATAM. Lo que nos separa de los demás es el nivel de involucramiento que tenemos en nuestros proyectos y la pasión que tenemos por desarrollar productos digitales de calidad mundial. Somos un equipo de 220+ dacoders especializados en la planeación, diseño, desarrollo, implementación e innovación continua de productos digitales disruptivos.</p>
  <div>
    <Image width={631} height={122} src="/awards.png" alt="awards" className="h-auto" />
  </div>
  </div>
 </footer>
)

export default Footer;