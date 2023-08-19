/** @typedef {typeof __propDef.props}  SideBarProps */
/** @typedef {typeof __propDef.events}  SideBarEvents */
/** @typedef {typeof __propDef.slots}  SideBarSlots */
export default class SideBar extends SvelteComponentTyped<{
    activeComponent?: string | undefined;
    components?: {} | undefined;
    activeCategory?: string | undefined;
    categories?: any[] | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SideBarProps = typeof __propDef.props;
export type SideBarEvents = typeof __propDef.events;
export type SideBarSlots = typeof __propDef.slots;
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
