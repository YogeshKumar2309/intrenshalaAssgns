import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="flex min-h-[70vh] items-center justify-center bg-chalk px-6 py-24 text-asphalt">
        <p className="max-w-xl text-center font-display text-2xl font-light leading-snug md:text-4xl">
          The hero unpins here. Scroll back up and the car drives in reverse.
        </p>
      </section>
    </main>
  );
}
