export const social = [
  { url: "mailto:dlexo09@gmail.com", name: "mail" },
  { url: "https://github.com/dlexo09", name: "github" },
  { url: "https://www.linkedin.com/in/webartisan09/", name: "linkedin" },
  //{ url: "https://x.com/yourprofile", name: "x" },
  //{ url: "https://www.instagram.com/yourprofile/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
