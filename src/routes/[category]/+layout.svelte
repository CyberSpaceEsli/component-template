<script>
    import SideBar from "../../components/SideBar.svelte";
    import SearchField from "../../components/SearchField.svelte";
    import ComponentContainer from "../../components/ComponentContainer.svelte";

    export let data;

</script>

<div>
    <SideBar categories={data.categories}/>

    <div class="pl-16 lg:pl-72">
        <SearchField />
        <main class="py-10">
            <slot></slot>
            <div class="px-4 sm:px-6 lg:px-8">
                <ComponentContainer />
            </div>
        </main>
    </div>
</div>