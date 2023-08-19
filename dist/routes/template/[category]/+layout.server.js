import { readdir } from 'node:fs/promises';
import { glob } from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';

// layout.server.js damit in der layout.svelte auf data zugegriffen werden kann und die props übergeben werden können
// asynchrone Funktion gibt ein Objekt mit zwei Eigenschaften categories und components zurück
export const load = async ({ params:{ category, component} }) => {
    return {
        categories: await readFilesInDirectory(`${__dirname}/src/lib/component-template`),
        components: await readFilesGlob(`${__dirname}/src/lib/component-template/*/*.svelte`),
        componentFiles: await getSvelteFiles(`${__dirname}/src/lib/component-template/*/*.svelte`),
        category,
        component
    }
}

//globaler Pfad vom Projekt auslesen
const __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

console.log("Filename",__filename)

const srcIndex = __dirname.lastIndexOf('src');
if (srcIndex !== -1) {
    // Extract the path up to the "src" directory
    __dirname = __dirname.substring(0, srcIndex);
}
console.log("hello", __dirname)


// der Pfad unter categories wird der Funktion readFilesInDirectory übergeben
// Funktion liest alle Dateien vom Verzeichnis `./src/lib/component-template` > directory aus
async function readFilesInDirectory(directory) {
    try {
        return await readdir(directory);
    } catch (error) {
        console.error('Error reading directory:', error);
    }
}

// getSvelteFiles nimmt Verzeichnis entgegen ./src/lib/component-template/*/*.svelte
// liest die Pfade der einzelnen Svelte Dateien aus
// sort soritert die Pfade alphabetisch
async function getSvelteFiles(directory) {
    let result = await glob(directory);

    result.sort();
    return result;
}



// der Pfad unter components wird der Funktion readFilesGlob übergeben
// Funktion liest alle Svelte-Dateien der category Ordner `./src/lib/component-template/*/*.svelte` > directory aus
// Der Pfad wird zudem zerstückelt mit js Funktionen
async function readFilesGlob(directory) {
    try {
        let result = await getSvelteFiles(directory);

        let obj ={};
        result.forEach(function (path){
            let objPath = path.split("/")


            let filename = objPath.pop().split(".")[0];


            let parent = objPath.pop();

            if (obj[parent] === undefined) {
                obj[parent] = [];
            }
            //erzeugt Array mit Objekten
            // parent ist category und bildet den Schlüssel vom Objekt obj
            //filename ist component und wird am Ende des Arrays angefügt
            obj[parent].push(filename);
        })

        return obj;

    } catch (error) {
        console.error('Error reading directory:', error);
    }
}

