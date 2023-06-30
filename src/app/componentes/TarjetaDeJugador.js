import Image from "next/image"
export default function tarjetaDeJugador({nombre,apellido,numero,rol}) {
  return (
    <div className='basis-1/4 border border-violet-400 border-solid'>
        <Image 
        src="/next.svg"
        height={60}
        width={60}
        />
        <h3>{nombre}</h3>
        <h3>{apellido}</h3>
        <h3>{numero}</h3>
        <h3>{rol}</h3>
        
        
    </div>
  )
}
