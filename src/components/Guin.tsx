import Image from "next/image";
import { PropsWithChildren } from "react";

function Guin({
  children,
  hasImage,
  guiner = true,
}: PropsWithChildren<{ hasImage?: boolean; guiner?: boolean }>) {
  return (
    <div className="border-b border-gray-300 hover:bg-gray-200 ease-in-out duration-200 cursor-pointer">
      {guiner ? (
        <div className="flex px-2 gap-2 pt-2">
          <div className="icon min-w-[66px] flex justify-end px-2">RT</div>
          <span>POR GUNTER</span>
        </div>
      ) : null}
      <div className="flex p-2 gap-2 pr-4">
        <div className="min-w-[66px]">
          <Image
            className="mx-auto"
            src={"/profile.png"}
            alt={"user photo"}
            width={50}
            height={50}
          />
        </div>

        <section>
          <div className="flex gap-1">
            <span className="font-bold">GunteR_RL</span>
            <span>@GunteR_</span>
            <span>·</span>
            <span>1min</span>
          </div>
          <p>{children}</p>
          <div className="relative h-[300px] mt-5 cursor-pointer">
            {hasImage ? (
              <Image
                className="object-cover rounded-lg"
                src="/imageguin.jpg"
                alt="guin image"
                fill
              />
            ) : null}
          </div>
          {/* puede ser otro componente */}
          <div className="flex my-3 ">
            <button className="flex items-center flex-grow group">
              <div className="p-1 rounded-full ease-in-out duration-200  group-hover:bg-blue-400 group-hover:bg-opacity-50">
                <Image
                  src={"/message.svg"}
                  width={20}
                  height={20}
                  alt="message icon"
                />
              </div>
              <span className="px-1 group-hover:text-blue-400">1</span>
            </button>
            <button className="flex items-center flex-grow group">
              <div className="p-1 rounded-full ease-in-out duration-200  group-hover:bg-green-400 group-hover:bg-opacity-50">
                <Image
                  src={"/share.svg"}
                  width={20}
                  height={20}
                  alt="share icon"
                />
              </div>
              <span className="px-1 group-hover:text-green-400">17k</span>
            </button>
            <button className="flex items-center flex-grow group">
              <div className="p-1 rounded-full ease-in-out duration-200  group-hover:bg-red-600 group-hover:bg-opacity-50">
                <Image
                  src={"/heart.svg"}
                  width={20}
                  height={20}
                  alt="like icon"
                />
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
