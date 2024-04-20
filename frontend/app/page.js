'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';



export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="pb-20">TESTING</h1>
      <button className="bg-white text-black" onClick={() => router.push('/login')}>LOGIN</button>

      <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </main>
  );
}
