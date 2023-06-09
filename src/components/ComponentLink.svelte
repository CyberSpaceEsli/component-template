<script>
import {generateLink} from "../functions/link.js";

export let component;
export let category;

</script>

<a href={generateLink(component, category)} class="text-gray-700 hover:text-indigo-600 rounded-md hover:underline">
    {component}
</a>