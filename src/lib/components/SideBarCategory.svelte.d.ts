/** @typedef {typeof __propDef.props}  SideBarCategoryProps */
/** @typedef {typeof __propDef.events}  SideBarCategoryEvents */
/** @typedef {typeof __propDef.slots}  SideBarCategorySlots */
export default class SideBarCategory extends SvelteComponentTyped<{
    nav: any;
    subItems: any;
    activeComponent?: string | undefined;
    activeCategory?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SideBarCategoryProps = typeof __propDef.props;
export type SideBarCategoryEvents = typeof __propDef.events;
export type SideBarCategorySlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        nav: any;
        subItems: any;
        activeComponent?: string | undefined;
        activeCategory?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
