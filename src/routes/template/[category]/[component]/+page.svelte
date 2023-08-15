<script>
    import ComponentFrame from "../../../../lib/components/ComponentFrame.svelte";

    export let data;

    $: componentPath = getComponentPath(data.category, data.component, data.componentFiles)
    /*
        todo remove duplicated function and use import
     * '../lib/component-template/atoms/Button2.svelte'
     */
    // Funktion, gibt ein Array mit allen Pfaden der categories/components zurück, wobei src mit .. ausgetauscht wird

    function getComponentPath(category, component, componentFiles){
        let paths = componentFiles.filter(function (value){

            let path = `src/lib/component-template/${category}/${component}.svelte`;
            return value === path;
        }).map(function (value) {
            return value.replace(/^src\/lib/, '..');
        });

        return paths[0];
    }
</script>

<ComponentFrame componentPath={componentPath}/>