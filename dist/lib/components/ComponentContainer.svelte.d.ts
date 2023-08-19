/** @typedef {typeof __propDef.props}  ComponentContainerProps */
/** @typedef {typeof __propDef.events}  ComponentContainerEvents */
/** @typedef {typeof __propDef.slots}  ComponentContainerSlots */
export default class ComponentContainer extends SvelteComponentTyped<{
    componentPaths?: any[] | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ComponentContainerProps = typeof __propDef.props;
export type ComponentContainerEvents = typeof __propDef.events;
export type ComponentContainerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        componentPaths?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
