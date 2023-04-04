"use client";
import { Inter } from "next/font/google";
import { Guin, Header, ShowNewGuinsButton } from "@/components";
import GuinPost from "@/components/GuinPost";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks";

const inter = Inter({ subsets: ["latin"] });
function HomePage() {
  const [terrorismo, setTerrorismo] = useState(false);
  const ref = useRef();
  const observer = useIntersectionObserver({
    cb: (show) => {
      setTerrorismo(show);
    },
  });
  useEffect(() => {
    let newRef = ref;
    if (newRef.current) observer.observe(newRef.current);
    return () => {
      if (newRef.current) observer.unobserve(newRef.current);
    };
  }, [observer]);
  const newRef = useRef(null);
  return (
    <div className="flex items-center flex-col justify-center">
      <div className="container flex flex-1">
        <Header />
        <main className="flex-1 relative h-full">
          <div className="sticky top-0 z-10 backdrop-blur-sm border-x border-b border-gray-300 bg-[#f7f7f7] bg-opacity-80">
            <h2 className="flex p-4 items-center text-xl font-bold">Inicio</h2>
            <button
              className={`${
                terrorismo ? "hidden" : ""
              } flex gap-2 items-center p-2 rounded-full fixed top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center ease-in-out duration-200 hover:bg-orange-400 bg-orange-500`}
            >
              <Image
                src={"icon-arrow-up.svg"}
                alt="upper arrow"
                width={15}
                height={15}
              />
              <span className="text-white text-xs font-bold">Go Up</span>
            </button>
          </div>
          <GuinPost />
          <ShowNewGuinsButton ref={newRef} />
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
