import { defineConfig } from "astro/config";


let counts = [];

function manualChunks(id, { getModuleInfo }) {
    let result = null;
    const limit = 20;
    const regex = /\/pages\/(.*?)\.astro/g;
    let getPage = (id)=>{
        if (id.includes('astrojs-pages-virtual-entry')) return 'page';

        if (id.includes('pages')) {
            const match = regex.exec(id);
            if (match) {
                const extractedText = match[1];
                return extractedText;
            }
        } else {
            return getPage(getModuleInfo(id).importers.sort()[0]);
        }
        return 'empty';
    }

    if (id.includes('css')){
        if (id.includes('node_modules')) {
            result = 'vendor';
        } else {
            result =  getPage(id)
        }
    }

    if (result) {
        counts[result] = counts[result]?counts[result]+1:1;
        console.log(counts);
        let counter = Math.floor(counts[result]/9);
        return result+((counter)?'-'+counter:'');
    }


}
export default defineConfig({
    build: {
        format: 'file'
    },
    vite: {
        build: {
            rollupOptions: {
                output: {
                  entryFileNames: '_astro/entry.js',
                  chunkFileNames: '_astro/chunks/chunk.[name].js',
                  assetFileNames: '_astro/assets/asset.[name][extname]',
                    manualChunks:manualChunks
                },
                maxParallelFileOps:1,
                cache:0,
            }
        },
    },
});
