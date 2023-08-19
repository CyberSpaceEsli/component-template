// Funktion, gibt ein Array mit allen Pfaden der categories zurück, wobei src/lib mit .. ausgetauscht wird

export function getComponentPath(category, component, componentFiles){

    if (category !== null) {
        let paths = componentFiles.filter(function (value){

            const srcIndex = value.indexOf('src');

            // If "src" is found, extract the substring starting from "src"
            let croppedPath = "";
            if (srcIndex !== -1) {
                croppedPath = value.substring(srcIndex);
            }

            let path = `src/lib/component-template/${category}/${component}.svelte`;

            return croppedPath === path;
        }).map(function (value) {
            return value.replace(/^src\/lib/, '..');
        });

        return paths[0];
    }

     return componentFiles.filter(function (value){

         const srcIndex = value.indexOf('src');

         // If "src" is found, extract the substring starting from "src"
         let croppedPath = "";
         if (srcIndex !== -1) {
             croppedPath = value.substring(srcIndex);
         }

            let path = `src/lib/component-template/${component}`

            return croppedPath.startsWith(path);
        }).map(function (value) {
            return value.replace(/^src\/lib/, '..');
        })
}