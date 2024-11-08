import { defineConfig } from "vite";

export default defineConfig({
    css: {
        minify:true,
    },

    build: {
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            input:"./estilos/estilos.css",
            output: {
                assetFileNames: (assetInfo) => {
                    if(assetInfo.name && assetInfo.name.endsWith(".css")){
                        return "css/estilos.min.css";
                    }
                    return assetInfo.name;
                }
            }
        }
    }
})