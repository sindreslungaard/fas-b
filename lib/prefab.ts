interface Prefab {
    applyStyle(string);
    render(): string;
}

interface PrefabFactory {
    new (
        prefab: Prefab,
        options: {
            temp?: string;
        }
    );
}
