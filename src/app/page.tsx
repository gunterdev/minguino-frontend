import Image from "next/image";
import { Inter } from "next/font/google";
import { Guin, Header } from "@/components";
import GuinPost from "@/components/GuinPost";

const inter = Inter({ subsets: ["latin"] });

function HomePage() {
  return (
    <div className="flex items-center flex-col justify-center">
      <div className="container flex flex-1">
        <Header />
        <main className="flex-1 relative h-full">
          <div className="sticky top-0 z-10 backdrop-blur-sm border-x border-b border-gray-300 bg-[#f7f7f7] bg-opacity-80">
            <h2 className="flex p-4 items-center text-xl font-bold">Inicio</h2>
          </div>
          <GuinPost />
          <button className="text-orange-500 w-full p-3 text-center hover:bg-gray-200 border-b border-x border-gray-300">
            Show 33 Guin
          </button>
          <section className="minguinos-container border-x border-gray-300">
            <Guin hasImage>
              No tenía un destino en mente. Solo quería cabalgar. Siguió el
              arroyo por un tiempo, escuchando el goteo del agua congelada sobre
              las rocas, luego cortó camino a través de los campos hacia el
              camino del rey.
            </Guin>
            <Guin hasImage>
              No tenía un destino en mente. Solo quería cabalgar. Siguió el
              arroyo por un tiempo, escuchando el goteo del agua congelada sobre
              las rocas, luego cortó camino a través de los campos hacia el
              camino del rey.
            </Guin>
            <Guin hasImage>
              No tenía un destino en mente. Solo quería cabalgar. Siguió el
              arroyo por un tiempo, escuchando el goteo del agua congelada sobre
              las rocas, luego cortó camino a través de los campos hacia el
              camino del rey.
            </Guin>
            <Guin hasImage>
              No tenía un destino en mente. Solo quería cabalgar. Siguió el
              arroyo por un tiempo, escuchando el goteo del agua congelada sobre
              las rocas, luego cortó camino a través de los campos hacia el
              camino del rey.
            </Guin>
            <Guin hasImage>
              No tenía un destino en mente. Solo quería cabalgar. Siguió el
              arroyo por un tiempo, escuchando el goteo del agua congelada sobre
              las rocas, luego cortó camino a través de los campos hacia el
              camino del rey.
            </Guin>
            <Guin hasImage>
              No tenía un destino en mente. Solo quería cabalgar. Siguió el
              arroyo por un tiempo, escuchando el goteo del agua congelada sobre
              las rocas, luego cortó camino a través de los campos hacia el
              camino del rey.
            </Guin>
            <Guin hasImage>
              No tenía un destino en mente. Solo quería cabalgar. Siguió el
              arroyo por un tiempo, escuchando el goteo del agua congelada sobre
              las rocas, luego cortó camino a través de los campos hacia el
              camino del rey.
            </Guin>
            <Guin hasImage>
              No tenía un destino en mente. Solo quería cabalgar. Siguió el
              arroyo por un tiempo, escuchando el goteo del agua congelada sobre
              las rocas, luego cortó camino a través de los campos hacia el
              camino del rey.
            </Guin>{" "}
            <Guin hasImage>
              No tenía un destino en mente. Solo quería cabalgar. Siguió el
              arroyo por un tiempo, escuchando el goteo del agua congelada sobre
              las rocas, luego cortó camino a través de los campos hacia el
              camino del rey.
            </Guin>
            <Guin hasImage>
              No tenía un destino en mente. Solo quería cabalgar. Siguió el
              arroyo por un tiempo, escuchando el goteo del agua congelada sobre
              las rocas, luego cortó camino a través de los campos hacia el
              camino del rey.
            </Guin>
            <Guin hasImage>
              No tenía un destino en mente. Solo quería cabalgar. Siguió el
              arroyo por un tiempo, escuchando el goteo del agua congelada sobre
              las rocas, luego cortó camino a través de los campos hacia el
              camino del rey.
            </Guin>
            <Guin hasImage>
              No tenía un destino en mente. Solo quería cabalgar. Siguió el
              arroyo por un tiempo, escuchando el goteo del agua congelada sobre
              las rocas, luego cortó camino a través de los campos hacia el
              camino del rey.
            </Guin>
          </section>
        </main>
        <aside className="sticky top-0 h-full p-6  hidden lg:block sm:w-48 md:w-64">
          hey
        </aside>
      </div>
    </div>
  );
}

export default HomePage;
