/** @typedef {typeof __propDef.props}  PageProps */
/** @typedef {typeof __propDef.events}  PageEvents */
/** @typedef {typeof __propDef.slots}  PageSlots */
export default class Page extends SvelteComponentTyped<{
    data: {
        categories: any;
        components: {} | undefined;
        componentFiles: string[];
        category: any;
        component: any;
    };
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PageProps = typeof __propDef.props;
export type PageEvents = typeof __propDef.events;
export type PageSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data: {
            categories: any;
            components: {} | undefined;
            componentFiles: string[];
            category: any;
            component: any;
        };
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
