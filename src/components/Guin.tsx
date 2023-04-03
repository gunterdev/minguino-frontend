import Image from "next/image";
import { PropsWithChildren } from "react";

function Guin({ children, hasImage }: PropsWithChildren<{ hasImage?: boolean }>) {
  return (
    <div className="flex flex-col p-3 border-b border-gray-300 hover:bg-gray-200 ease-in-out duration-200 cursor-pointer">
      <div className="flex">
        <div className="icon min-w-[66px] flex justify-end px-2">RT</div>
        <div className="px-2">POR GUNTER</div>
      </div>
      <div className="flex">
        <div className="min-w-[66px] px-2">
          <Image className="mx-auto" src={"/profile.png"} alt={"user photo"} width={50} height={50} />
        </div>

        <section className="px-2">
          <div className="flex gap-1">
            <span className="font-bold">GunteR_RL</span>
            <span>@GunteR_</span>
            <span>·</span>
            <span>1min</span>
          </div>
          <p>{children}</p>

          {hasImage ? (
            <div className="relative h-[500px] my-5 cursor-pointer">
              <Image className="object-cover rounded-lg" src="/imageguin.jpg" alt="waifu" fill />{" "}
            </div>
          ) : null}

          {/* puede ser otro componente */}
          <div className="flex mt-3 ">
            <button className="flex items-center flex-grow group">
              <div className="p-1 rounded-full ease-in-out duration-200  group-hover:bg-blue-400 group-hover:bg-opacity-50">
                <Image src={"/message.svg"} width={20} height={20} alt="message icon" />
              </div>
              <span className="px-1 group-hover:text-blue-400">1</span>
            </button>
            <button className="flex items-center flex-grow group">
              <div className="p-1 rounded-full ease-in-out duration-200  group-hover:bg-green-400 group-hover:bg-opacity-50">
                <Image src={"/share.svg"} width={20} height={20} alt="share icon" />
              </div>
              <span className="px-1 group-hover:text-green-400">17k</span>
            </button>
            <button className="flex items-center flex-grow group">
              <div className="p-1 rounded-full ease-in-out duration-200  group-hover:bg-red-600 group-hover:bg-opacity-50">
                <Image src={"/heart.svg"} width={20} height={20} alt="like icon" />
              </div>
              <span className="px-1 group-hover:text-red-600">132k</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Guin;
