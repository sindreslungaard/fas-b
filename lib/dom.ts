import { Prefab } from "./prefab";

interface VirtualDOM {
    root: HTMLElement;
    children: Prefab[];
}

export const render = (vm: VirtualDOM) => {};
