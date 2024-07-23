"use client"

import Link from "next/link"
import { FC } from "react"
import { AFASSVG } from "../icons/afas-svg"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <>
      <div className="mb-2 flex justify-center">
        <AFASSVG theme={theme === "dark" ? "dark" : "light"} scale={0.5} />
      </div>
    </>
  )
}
