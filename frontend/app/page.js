'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';



export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="pb-20">TESTING</h1>
      <button className="bg-white text-black" onClick={() => router.push('/login')}>LOGIN</button>
    </main>
  );
}
