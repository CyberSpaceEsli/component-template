<script>
import { generateLink } from "./functions/link.js";

export let component;
export let category;
export let activeComponent='';

$: setLink = activeLink(activeComponent,component);

function activeLink(activeComponent, subItem) {
    if (activeComponent === component) {
        return "text-indigo-600 underline";
    }
}

</script>

<a href={generateLink(component, category)} class="{setLink} text-indigo-950 hover:text-indigo-600 rounded-md hover:underline">
    {component}
</a>