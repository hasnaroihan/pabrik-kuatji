import { RefObject } from "react"

export type NavProp = {
    title: string,
    ref: RefObject<HTMLInputElement>,
    id: string
}

export type SkillCard = {
    id: string | null,
    desc: string[],
    position: string
}