import { RefObject } from "react"

export type NavProp = {
    title: string,
    ref: RefObject<HTMLInputElement>,
    id: string
}