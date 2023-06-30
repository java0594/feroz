import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Image
                src="/logo_fieras_(1).png"
                alt="Feroz logo"
                width={150}
                height={150}
                className='logos'
            />

            <div><Link href="../">FEROZ</Link></div>
        </main>
    )
}