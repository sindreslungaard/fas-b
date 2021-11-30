export interface Prefab {
    state: any;
    didJustUpdate: boolean;
    children: Prefab[];
}

export interface PrefabFactory {
    new (
        prefab: Prefab,
        options: {
            temp?: string;
        }
    );
}
