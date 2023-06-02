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
     * todo remove duplicated function and use import
     * '../lib/component-template/atoms/Button2.svelte'
     * @param search
     * @param componentPaths
     */
    function getComponentPath(search, componentPaths){
        console.log('categoryPATH', search);
        return componentPaths.filter(function (value){

            let path = `src/lib/component-template/${search}`

            return value.startsWith(path);
        }).map(function (value) {
            return value.replace(/^src/, '..');
        })
    }
</script>


<ComponentContainer componentPaths={componentPaths}/>