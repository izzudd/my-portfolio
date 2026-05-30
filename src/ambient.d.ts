declare module '*/projects.yaml' {
  const content: {
    title: string;
    tag: string[];
    link: string;
    description: string;
    wip?: boolean;
    stack: string[];
  }[];
  export default content;
}

declare module '*/writings.yaml' {
  const content: { title: string; leading: string; link: string; description: string }[];
  export default content;
}

declare module '*/about.yaml' {
  const content: { description: string[]; techs: Record<string, string[]> };
  export default content;
}

declare module '*.yaml' {
  const content: Record<string, unknown>;
  export default content;
}
