import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header>
        <Link href={"/"}>Home</Link>
        <Link href={"/presentation"}>Présentation</Link>
        <h2>lien</h2>
    </header>
  )
}
