interface Site {
    mode(string: "editor" | "preview" | "production");
    viewport(width: number);
    import(obj: Object);
    export(): Object;
}

export const site = (el: HTMLElement): Site => {
    return {
        mode: (m: string) => {},
        viewport: (w: number) => {},
        import: (obj: Object) => {},
        export: () => ({}),
    };
};
