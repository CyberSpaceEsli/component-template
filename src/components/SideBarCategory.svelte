<script>
    import {generateLink} from "../functions/link.js";
    import ComponentLink from "./ComponentLink.svelte";

    export let nav;
    export let subItems;
    let showComponents = false;

    // toogelt den auf- und zuklapp Mechanismus der svgs 'plus-small' und 'min-small'
    function toggleComponents() {
        showComponents = !showComponents;
    }

</script>

<li>
    <div class="flex justify-between">
        <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
        <a href="/{nav.name}" class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
            <span class={nav.iconStyle}>{nav.shortName}</span>
            <span class="truncate active:text-indigo-600">{nav.name}</span>
        </a>

        <div class="h-fit mt-2">
            <button class="hover:border hover:border-indigo-600 hover:rounded-md" on:click={toggleComponents}>
                <svg id="plus-small" class="w-6 h-6 items-end text-gray-500" class:hidden={showComponents} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <svg id="min-small" class="w-6 h-6 items-end text-gray-500" class:hidden={!showComponents} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                </svg>
            </button>
        </div>
    </div>

    {#if showComponents}
    <div id="component-box" class:hidden={!showComponents} class="flex flex-col w-fit pl-10">
        <ul class="">
            <li class="">
                    {#each subItems as subItem}
                    <div>
                        <span class="text-indigo-600">-</span>
                        <ComponentLink component={subItem} category={nav.name}/>
                    </div>
                    {/each}
            </li>
        </ul>
    </div>
    {/if}
</li>







