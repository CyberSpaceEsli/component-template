//categoryPaths gibt ein Array aus den fünf Pfaden der categories zurück, wie '../lib/component-template/atoms'
// componentPath gibt nur den ersten Eintrag des Array mit den Pfaden für die einzelnen components zurück, wie '../lib/component-template/atoms/Button2.svelte'

/*export function getPath (category, component, file) {

    let categoryPaths = file.filter(function (value) {
            let path = `src/lib/component-template/${category}`;
            return value.startsWith(path);
        }).map(function (value) {
            return value.replace(/^src/, '..');
        });

    console.log("componentPaths", componentPaths)

    let componentPaths = file.filter(function (value) {
            let path = `src/lib/component-template/${category}/${component}.svelte`;
            return value === path;
        }).map(function (value) {
            return value.replace(/^src/, '..');
        });

    return {
        categoryPaths,
        componentPath: componentPaths[0],
    };

} */

/*
 function getComponentPath(category, component, componentFiles){
        let paths = componentFiles.filter(function (value){

            let path = `src/lib/component-template/${category}/${component}.svelte`;
            return value === path;
        }).map(function (value) {
            return value.replace(/^src/, '..');
        });

        return paths[0];
    }
 */