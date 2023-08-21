<script>
import ComponentFrame from "./ComponentFrame.svelte";

//todo use route param category
export let componentPaths = [];
export let category ;
console.log("category",category);
</script>

    <div class="flex flex-col">
        {#each componentPaths as component}
            <ComponentFrame componentPath={component} category={category}/>
            <span class="h-0.5 w-full divide-y bg-indigo-600 mb-10"></span>
        {/each}

    </div>