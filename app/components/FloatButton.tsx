"use client";

import { useEffect, useState } from "react";

export default function FloatButton() {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 180) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isShow && (
        <button
          onClick={onClick}
          className="btn btn-circle bg-base-100 btn-outline fixed bottom-10 right-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}
    </>
  );
}
