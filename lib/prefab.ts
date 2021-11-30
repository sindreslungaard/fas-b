export interface Prefab {
    uniqueId: string;
    html(): string;
}

export const prefab = (
    uniqueId: string,
    options: {
        html(): string;
        mounted?();
        update?();
    }
): Prefab => {
    return {
        uniqueId,
        ...options,
    };
};
