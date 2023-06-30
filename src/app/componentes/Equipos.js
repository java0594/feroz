import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Equipos() {
    return (
        <div class="container ">
            <div class="split left">
                <h1>FIERAS</h1>
            </div>

            <div class="split right">
                <h1>ESPARTA</h1>
                 <Link href="/esparta">ESPARTA
                
                 </Link>
            </div>
        </div>
    )
}
