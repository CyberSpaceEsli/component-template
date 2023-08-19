/** @typedef {typeof __propDef.props}  LayoutProps */
/** @typedef {typeof __propDef.events}  LayoutEvents */
/** @typedef {typeof __propDef.slots}  LayoutSlots */
export default class Layout extends SvelteComponentTyped<{
    data: {
        categories: any;
        components: {} | undefined;
        componentFiles: string[];
        category: any;
        component: any;
    };
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type LayoutProps = typeof __propDef.props;
export type LayoutEvents = typeof __propDef.events;
export type LayoutSlots = typeof __propDef.slots;
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
    slots: {
        default: {};
    };
};
export {};
