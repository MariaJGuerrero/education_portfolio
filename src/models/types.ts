export type setActiveSections = React.Dispatch<React.SetStateAction<"contact" | "about" | "proyects" | undefined>>
export type sections = "contact" | "about" | "proyects" | undefined
export type proyectsArrayType = { id: string; date: string; description: string;  }[]
export type modalArrayType = { id: string; title: string; description: string;  }[]
