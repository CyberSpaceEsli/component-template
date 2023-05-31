import { readdir } from 'node:fs/promises';
import { glob } from 'glob';

export const load = async () => {
    return {
        categories: await readFilesInDirectory(`./src/lib/component-template`),
        components: await readFilesGlob(`./src/lib/component-template/*/*.svelte`)
    }
}

async function readFilesInDirectory(directory) {
    try {
        return await readdir(directory);
    } catch (error) {
        console.error('Error reading directory:', error);
    }
}



async function readFilesGlob(directory) {
    try {
        let result = await glob(directory);

        result.sort();

        let obj ={};
        result.forEach(function (path){
            let objPath = path.split("/")


            let filename = objPath.pop().split(".")[0];


            let parent = objPath.pop();

            if (obj[parent] === undefined) {
                obj[parent] = [];
            }
            obj[parent].push(filename);
        })

        return obj;

        //return {atoms : ["Button.svelte","Button2.svelte"]};
    } catch (error) {
        console.error('Error reading directory:', error);
    }
}

