import Image from 'next/image'
import TarjetaDeJugador from '../componentes/TarjetaDeJugador';
import Titulo from '../componentes/Titulo';


export default function Home() {
  const data = [ {
    nombre: "Juan",
      apellido: "Vasquez",
        numero: 31,
          rol: "c"
            
  },
  {
    nombre: "Ulises",
      apellido: "Achurra",
        numero: 33,
          rol: "m"
            
  },
  {
    nombre: "Ana",
      apellido: "Moreno",
        numero: 32,
          rol: "m"
            
  },
  {
    nombre: "Ana",
      apellido: "Him",
        numero: 94,
          rol: "m"
            
  },
  {
    nombre: "Kevin",
      apellido: "Carles",
        numero: 14,
          rol: "m"
            
  },
  {
    nombre: "Ricauter",
      apellido: "Fernandez",
        numero: 93,
          rol: "c"
            
  },
  {
    nombre: "Claudia",
      apellido: "Gutierrez",
        numero: 30,
          rol: "c"
          
  },
  {
    nombre: "Rejane",
      apellido: "Riquelme",
        numero: 12,
          rol: "c"
            
  },
  {
    nombre: "Andrea",
      apellido: "Galindo",
        numero: 87,
          rol: "c"
            
  }];
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
      <div>
      <Image
        src="/logo_esparta_2023_byn_Mesa_de_trabajo_1__(1)(1).png"
        alt="Feroz logo"
        width={150}
        height={150}
        className='logos'
      />
        <Titulo encabezados="Cortadores"/> 
        <TarjetaDeJugador nombre={data[2].nombre} apellido={data[2].apellido} numero={data[2].numero} rol={data[2].rol}/>
        <div className='flex '>
        {data.map((jugador)=>(<TarjetaDeJugador  nombre={jugador.nombre} apellido={jugador.apellido} numero={jugador.numero} rol={jugador.rol} key={jugador.numero}/>))}
        </div>
      </div>
      <div>
        <Titulo encabezados="Manejadores"/>
      </div>
      
    </main>
  )
}


  

