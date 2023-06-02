import { readdir } from 'node:fs/promises';
import { glob } from 'glob';

// layout.server.js damit in der layout.svelte auf data zugegriffen werden kann und die props übergeben werden können
// asynchrone Funktion gibt ein Objekt mit zwei Eigenschaften categories und components zurück
export const load = async () => {
    return {
        categories: await readFilesInDirectory(`./src/lib/component-template`),
        components: await readFilesGlob(`./src/lib/component-template/*/*.svelte`)
    }
}

// der Pfad unter categories wird der Funktion readFilesInDirectory übergeben
// Funktion liest alle Dateien vom Verzeichnis `./src/lib/component-template` > directory aus
async function readFilesInDirectory(directory) {
    try {
        return await readdir(directory);
    } catch (error) {
        console.error('Error reading directory:', error);
    }
}


// der Pfad unter components wird der Funktion readFilesGlob übergeben
// Funktion liest alle Svelte-Dateien der category Ordner `./src/lib/component-template/*/*.svelte` > directory aus
// Der Pfad wird zudem zerstückelt mit js Funktionen
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
            //erzeugt Array mit Objekten
            // parent ist category und bildet den Schlüssel vom Objekt obj
            //filename ist component und wird am Ende des Arrays angefügt
            obj[parent].push(filename);
        })

        console.log('components', obj);
        return obj;

    } catch (error) {
        console.error('Error reading directory:', error);
    }
}

