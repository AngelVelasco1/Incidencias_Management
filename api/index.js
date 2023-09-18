import app from './app.js';
import { CONFIG } from "./config/credentials.js";



app.listen(CONFIG.server, () => {
    console.log(`Listening on http://${CONFIG.server.hostname}:${CONFIG.server.port}`);
})