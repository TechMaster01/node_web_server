import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const startServer = (options) => {
    const { port, public_path = 'public' } = options;  // ✅ Corrección: no usar `${public_path}` aquí

    const app = express();

    // Asegurar que public_path sea una ruta absoluta
    const absolutePublicPath = path.resolve(__dirname, '../../', public_path);  // ✅ Ajusta correctamente la ruta

    // Servir archivos estáticos desde la raíz del proyecto
    app.use(express.static(absolutePublicPath));

    app.get('*', (req, res) => {
        const indexPath = path.join(absolutePublicPath, 'index.html');
        res.sendFile(indexPath);
    });

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};
