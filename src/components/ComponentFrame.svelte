<script>
    import { onMount } from 'svelte';

    let searchName ;
    export let componentPath ;

    searchName = componentPath.split("/").pop().split(".")[0];

    let component;

    onMount(async () => {
        component = (await import(componentPath)).default;
    });

</script>

        <div class="py-6">
            <div class="flex flex-row justify-between content-center mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div class='flex flex-col space-y-2'>
                    <h1 class="h-12 text-2xl font-semibold text-gray-900">{searchName}</h1>
                </div>

                <button class="h-12 w-60 ml-12 text-gray-400 bg-transparent border border-solid border-gray-200 hover:border-indigo-600 hover:text-indigo-600 active:bg-indigo-600 active:text-white font-bold uppercase text-sm rounded outline-none focus:outline-none ease-linear transition-all duration-150  active show px-3">
                    show import
                </button>
            </div>
            <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div class="py-4 h-auto">
                    <div class="flex justify-center my-4 py-4 border border-gray-300 rounded-lg">
                        <svelte:component this={component} buttonCaption={searchName}/>
                    </div>
                </div>
            </div>
        </div>
