export type setActiveSections = React.Dispatch<React.SetStateAction<"contact" | "about" | "proyects" | undefined>>
export type sections = "contact" | "about" | "proyects" | undefined
export type proyectsArrayType = { id: string; image: string; title: string; description: string; tecnologies: string; }[]
