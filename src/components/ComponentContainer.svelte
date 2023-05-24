<script>
import ComponentFrame from "./ComponentFrame.svelte";


import Button from '$lib/component-template/atoms/Button.svelte' ;
import Button2 from '$lib/component-template/atoms/Button2.svelte' ;

let components = [
    Button,
    Button2
]
</script>

    <div class="flex flex-col">

        {#each components as component, i}
            <ComponentFrame searchName={"Button"} >
                <svelte:component this={component} buttonCaption={i}/>
            </ComponentFrame>
            <span class="h-0.5 w-full divide-y bg-indigo-600 mb-10"></span>
        {/each}

    </div>