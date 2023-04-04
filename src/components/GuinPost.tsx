"use client";
import Image from "next/image";
import React, { ChangeEvent, LegacyRef, useRef, useState } from "react";

type Props = {};
interface GuinLength {
  value: number;
  width: string;
}
const MAX_LENGTH = 50;
function GuinPost(props: Props) {
  const [guinLength, setGuinLength] = useState<GuinLength>({
    value: 0,
    width: "0%",
  });
  const handleGuin = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const newWidth = (evt.currentTarget.value.length / MAX_LENGTH) * 100;
    const newGuinLenght: GuinLength = {
      value: evt.currentTarget.value.length,
      width: `${newWidth > 100 ? 100 : newWidth}%`,
    };
    setGuinLength(newGuinLenght);
  };
  return (
    <div className="flex gap-2 p-2 pr-4 border-b border-x border-gray-300">
      <div className="min-w-[66px]">
        <Image
          className="mx-auto"
          src={"/profile.png"}
          alt={"user photo"}
          width={50}
          height={50}
        />
      </div>
      <section className="w-full">
        <form action="">
          <textarea
            onChange={handleGuin}
            placeholder="Enviar guin..."
            className="w-full bg-[#f7f7f7] p-2 resize-none ase-in-out duration-200 border-transparent border-b-2 focus:border-orange-500 outline-none"
            name=""
            id=""
            rows={6}
          ></textarea>
        </form>
        <div className="flex mt-1">
          <div className="flex items-center flex-grow xl:gap-4">
            <button className="flex items-center group">
              <div className="p-1 rounded-full ease-in-out duration-200  group-hover:bg-slate-200 group-hover:bg-opacity-50">
                <Image
                  src={"picture.svg"}
                  width={20}
                  height={20}
                  alt="message icon"
                />
              </div>
            </button>
            <button className="flex items-center group">
              <div className="p-1 rounded-full ease-in-out duration-200  group-hover:bg-slate-200 group-hover:bg-opacity-50">
                <Image
                  src={"gif.svg"}
                  width={20}
                  height={20}
                  alt="share icon"
                />
              </div>
            </button>
            <button className="flex items-center group">
              <div className="p-1 rounded-full ease-in-out duration-200  group-hover:bg-slate-200 group-hover:bg-opacity-50">
                <Image
                  src={"link.svg"}
                  width={20}
                  height={20}
                  alt="like icon"
                />
              </div>
            </button>
            <button className="flex items-center group">
              <div className="p-1 rounded-full ease-in-out duration-200  group-hover:bg-slate-200 group-hover:bg-opacity-50">
                <Image
                  src={"location.svg"}
                  width={20}
                  height={20}
                  alt="like icon"
                />
              </div>
            </button>
          </div>
          <div className="flex items-center gap-4 progres">
            <span
              className={`text-sm ${
                guinLength.value > MAX_LENGTH
                  ? "text-red-500"
                  : "text-orange-500"
              }`}
            >
              {guinLength.value}/{MAX_LENGTH}
            </span>
            <div className="flex items-center w-24 rounded-full h-1 bg-neutral-200 dark:bg-neutral-200">
              <div
                style={{ width: guinLength.width }}
                className={`h-full rounded-[inherit] ${
                  guinLength.value > MAX_LENGTH ? "bg-red-500" : "bg-orange-500"
                }`}
              ></div>
            </div>
            <button className="flex items-center gap-1 text-white font-bold px-3 py-1 rounded-full bg-orange-500 ease-in-out duration-200 hover:bg-orange-400">
              <Image
                className="rotate-6"
                src={"penguin.svg"}
                width={20}
                height={20}
                alt="like icon"
              />
              <span>Post Guin</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GuinPost;
