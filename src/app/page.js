'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";



// index route
export default function Home() {
  
  const router = useRouter()
  function handleNavigate(){
    router.push('/products')
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to Next JS course 2024</h1>
      <Link href={'/products'}>Navigate to products page</Link> 
      <Link href={'/account'}>Navigate to accounts page</Link> 
      <h2 className="font-bold mt-3 text-lg">Alternate way of navigating using useRouter</h2>
      <button onClick={handleNavigate}>Navigate to products page using useRouter</button>
    </main>
  );
}
