<script>
    import ComponentContainer from "../../../lib/components/ComponentContainer.svelte";
    import { getComponentPath } from "../../../lib/components/functions/componentPath.js";

    export let data;
    let category = null;
    // data enthält ein Objekt mit den Eigenschaften categoriers: ["atoms", ...] > Array und
    // components: {atoms: ["Button","Button2"], molecules: ["InputForm"]} > Object

    //[category] ist eine dynamische route, der Name der Route ändert sich

    $: componentPaths = getComponentPath(category, data.category, data.componentFiles);
</script>


<ComponentContainer componentPaths={componentPaths}/>