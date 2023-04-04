"use client";
import { useIntersectionObserver } from "@/hooks";
import { MutableRefObject, useEffect, useRef } from "react";

type Props = {
  ref: MutableRefObject<null>;
};

function ShowNewGuinsButton({ ref }: Props) {
  console.log(ref);
  return (
    <button
      ref={ref}
      className="text-orange-500 w-full p-3 text-center hover:bg-gray-200 border-b border-x border-gray-300"
    >
      Show 33 Guin
    </button>
  );
}
export default ShowNewGuinsButton;
