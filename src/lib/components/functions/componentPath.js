// Funktion, gibt ein Array mit allen Pfaden der categories zurück, wobei src mit .. ausgetauscht wird

export function getComponentPath(category, component, componentFiles){

    if (category !== null) {
        let paths = componentFiles.filter(function (value){

            let path = `src/lib/component-template/${category}/${component}.svelte`;
            return value === path;
        }).map(function (value) {
            return value.replace(/^src\/lib/, '..');
        });

        return paths[0];
    }

     return componentFiles.filter(function (value){

            let path = `src/lib/component-template/${component}`

            return value.startsWith(path);
        }).map(function (value) {
            return value.replace(/^src\/lib/, '..');
        })
}