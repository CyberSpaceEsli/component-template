<script>
import ComponentFrame from "./ComponentFrame.svelte";

let componentPaths = [
    '../lib/component-template/atoms/Button.svelte',
    '../lib/component-template/atoms/Button2.svelte'
]

</script>

    <div class="flex flex-col">
        {#each componentPaths as component}
            <ComponentFrame componentPath={component}/>
            <span class="h-0.5 w-full divide-y bg-indigo-600 mb-10"></span>
        {/each}

    </div>