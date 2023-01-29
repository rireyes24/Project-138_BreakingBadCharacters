import {defineConfig, splitVendorChunkPlugin} from 'vite'
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
    server:{
        open: true,
        port: 1137,
    },
    //base: '/Project-138_BreakingBadCharacters/',
    build: {
        rollupOptions: {
            plugins: [visualizer({
                filename: 'stats.html',
                open: true,
                emitFile: true,
            })],
        }
    },
    plugins: [splitVendorChunkPlugin()],
}); 