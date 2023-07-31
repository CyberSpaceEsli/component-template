<script>
    import SideBarTab from "./SideBarTab.svelte";

    export let categories = [];
    export let components = {};
    export let activeCategory = '';
    export let activeComponent = '';
</script>

<!-- Static sidebar for desktop -->
<div class="w-16 fixed inset-y-0 z-50 flex lg:w-72 flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex grow flex-col gap-y-5 overflow-y-clip border-r border-gray-200 bg-white px-4 lg:px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
            <svg  class="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
            </svg>
            <p class="text-sm font-semibold text-gray-900 hidden lg:block pl-3">component-template</p>
        </div>
        <!-- Die props werden weiter an SideBarTab überführt-->
        <SideBarTab categories={categories} components={components} activeCategory={activeCategory} activeComponent={activeComponent}/>
    </div>
</div>