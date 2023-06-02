<script>
    import SideBar from "../../components/SideBar.svelte";
    import SearchField from "../../components/SearchField.svelte";
    import ComponentContainer from "../../components/ComponentContainer.svelte";

    export let data;
    // data enthält ein Objekt mit den Eigenschaften categoriers: ["atoms", ...] > Array und
    // components: {atoms: ["Button","Button2"], molecules: ["InputForm"]} > Object

    //[category] ist eine dynamische route, der Name der Route ändert sich

    $: componentPaths = getComponentPath(data.category, data.componentFiles);

    /**
     * '../lib/component-template/atoms/Button2.svelte'
     * @param search
     * @param componentPaths
     */
    function getComponentPath(search, componentPaths){
        return componentPaths.filter(function (value){

            let path = `src/lib/component-template/${search}`

            return value.startsWith(path);
        }).map(function (value) {
            return value.replace(/^src/, '..');
        })
    }
</script>

<div>
    <!-- categories und components werden an SideBar als prop übergeben-->
    <SideBar categories={data.categories} components={data.components}/>

    <div class="pl-16 lg:pl-72">
        <SearchField components={data.components}/>
        <main class="py-10">
            <slot></slot>
            <div class="px-4 sm:px-6 lg:px-8">
                <ComponentContainer componentPaths={componentPaths}/>
            </div>
        </main>
    </div>
</div>