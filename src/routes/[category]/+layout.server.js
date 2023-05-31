import { readdir } from 'node:fs/promises';

export const load = async ({ params:{ category, component} } ) => {
    return {
        categories: await readFilesInDirectory(`./src/lib/component-template`)
    }
}

async function readFilesInDirectory(directory) {
    try {
        return await readdir(directory);
    } catch (error) {
        console.error('Error reading directory:', error);
    }
}