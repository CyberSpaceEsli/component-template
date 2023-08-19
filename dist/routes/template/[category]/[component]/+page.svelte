<script>
    import ComponentFrame from "../../../../lib/components/ComponentFrame.svelte";
    import { getComponentPath } from "../../../../lib/components/functions/componentPath.js";

    export let data;

    $: componentPath = getComponentPath(data.category, data.component, data.componentFiles)

</script>

<ComponentFrame componentPath={componentPath}/>