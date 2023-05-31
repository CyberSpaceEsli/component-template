//import { readdir } from 'node:fs/promises';
//import path from 'node:path';

export const load = ({ params:{ category, component} }) => {
    return {
        category, component
    }
}

/*const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const atomsDir = path.join(__dirname, 'atoms');

// Function to read files in the directory
async function readFilesInDirectory(directory) {
    try {
        const files = await readdir(directory);

        // Iterate over the files and output their names
        for (const file of files) {
            console.log(file);
        }
    } catch (error) {
        console.error('Error reading directory:', error);
    }
}

// Call the function for the "atmos" directory
readFilesInDirectory(atomsDir);*/
