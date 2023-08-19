/** @typedef {typeof __propDef.props}  InterfaceDocumentationProps */
/** @typedef {typeof __propDef.events}  InterfaceDocumentationEvents */
/** @typedef {typeof __propDef.slots}  InterfaceDocumentationSlots */
export default class InterfaceDocumentation extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type InterfaceDocumentationProps = typeof __propDef.props;
export type InterfaceDocumentationEvents = typeof __propDef.events;
export type InterfaceDocumentationSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
