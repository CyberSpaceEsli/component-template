<script>
    import SideBar from '../../lib/components/SideBar.svelte'
    import ComponentContainer from "../../lib/components/ComponentContainer.svelte";
</script>

<SideBar />

<div class="pl-16 lg:pl-72">

    <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
            <ComponentContainer />
            <div class="text-center mt-12">
                <div class="flex flex-row justify-center space-x-2 items-center">
                    <svg class="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                    <h1 class="font-semibold text-2xl text-indigo-600">Welcome to the UI-Component-Template</h1>
                </div>
                <h2 class="mt-5">Use /template/[category] (e.g /template/atoms) to see your UI components and the navigation bar.</h2>
            </div>
        </div>
    </main>
</div>




