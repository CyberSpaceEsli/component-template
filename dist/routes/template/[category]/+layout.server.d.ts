export function load({ params: { category, component } }: {
    params: {
        category: any;
        component: any;
    };
}): Promise<{
    categories: any;
    components: {} | undefined;
    componentFiles: string[];
    category: any;
    component: any;
}>;
