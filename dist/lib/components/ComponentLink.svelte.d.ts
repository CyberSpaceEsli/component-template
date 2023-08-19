/** @typedef {typeof __propDef.props}  ComponentLinkProps */
/** @typedef {typeof __propDef.events}  ComponentLinkEvents */
/** @typedef {typeof __propDef.slots}  ComponentLinkSlots */
export default class ComponentLink extends SvelteComponentTyped<{
    component: any;
    category: any;
    activeComponent?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ComponentLinkProps = typeof __propDef.props;
export type ComponentLinkEvents = typeof __propDef.events;
export type ComponentLinkSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        component: any;
        category: any;
        activeComponent?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
