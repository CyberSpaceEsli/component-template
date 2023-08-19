<script>
    import SideBar from "../../../lib/components/SideBar.svelte";
    import SearchField from "../../../lib/components/SearchField.svelte";
    import { getComponentPath } from "../../../lib/components/functions/componentPath.js";

    export let data;
    // data enthält ein Objekt mit den Eigenschaften categoriers: ["atoms", ...] > Array und
    // components: {atoms: ["Button","Button2"], molecules: ["InputForm"]} > Object

    //[category] ist eine dynamische route, der Name der Route ändert sich
    let category = null;

    $: componentPaths = getComponentPath(category, data.category, data.componentFiles);
</script>

<div>
    <!-- categories und components werden an SideBar als prop übergeben-->
    <SideBar categories={data.categories} components={data.components} activeCategory={data.category} activeComponent={data.component}/>

    <div class="pl-16 lg:pl-72">
        {#if !data.component}
        <SearchField components={data.components}/>
        {/if}
        <main class="py-10">

            <div class="px-4 sm:px-6 lg:px-8">
                <slot></slot>
            </div>
        </main>
   </div>
</div>