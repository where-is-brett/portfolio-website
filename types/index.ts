import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface GridItemPayload {
    icon: StaticImport
    title: string
    description: string
}

export interface PostPayload {
    title: string
    body: string
    imageURLs?: string[]
    link?: string
}