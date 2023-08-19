/** @typedef {typeof __propDef.props}  ComponentFrameProps */
/** @typedef {typeof __propDef.events}  ComponentFrameEvents */
/** @typedef {typeof __propDef.slots}  ComponentFrameSlots */
export default class ComponentFrame extends SvelteComponentTyped<{
    componentPath?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ComponentFrameProps = typeof __propDef.props;
export type ComponentFrameEvents = typeof __propDef.events;
export type ComponentFrameSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        componentPath?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
