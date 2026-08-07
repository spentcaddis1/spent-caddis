import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}
      <Image
        src="/madison.png"
        alt="Madison River"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        <Image
          src="/logo.png"
          alt="Spent Caddis"
          width={420}
          height={220}
          className="mb-10 h-auto"
        />

        <h1 className="text-6xl font-bold text-white leading-tight">
          Quality Fly Tying Materials
          <br />
          at Affordable Prices
        </h1>

        <p className="mt-6 text-3xl italic text-green-200">
          Inspired by the Rivers We Fish.
        </p>

        <p className="mt-8 text-4xl font-bold text-white">
          Tie Better. Fish More. Spend Less.
        </p>

        <button className="mt-10 rounded bg-green-700 px-10 py-4 text-xl font-bold text-white hover:bg-green-800 transition">
          SHOP NOW
        </button>

      </div>
    </section>
  );
}