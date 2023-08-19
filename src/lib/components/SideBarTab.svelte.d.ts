/** @typedef {typeof __propDef.props}  SideBarTabProps */
/** @typedef {typeof __propDef.events}  SideBarTabEvents */
/** @typedef {typeof __propDef.slots}  SideBarTabSlots */
export default class SideBarTab extends SvelteComponentTyped<{
    activeComponent?: string | undefined;
    components?: {} | undefined;
    activeCategory?: string | undefined;
    categories?: any[] | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SideBarTabProps = typeof __propDef.props;
export type SideBarTabEvents = typeof __propDef.events;
export type SideBarTabSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        activeComponent?: string | undefined;
        components?: {} | undefined;
        activeCategory?: string | undefined;
        categories?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
