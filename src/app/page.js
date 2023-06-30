import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

     


      <Image
        src="/lgoo_feroz_sin_fondo-14.png"
        alt="Feroz logo"
        width={150}
        height={150}
        className='logos'
      />
      <div><Link href="/fieras">FIERAS</Link></div>
      <div> <Link href="/esparta">ESPARTA</Link></div>


    
    </main>
  )
}
