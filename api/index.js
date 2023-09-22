import app from './app.js';
import { CONFIG } from "./config/credentials.js";

app.listen(CONFIG, () => {
    console.log(`Listening on http://${CONFIG.hostname}:${CONFIG.port}`);
})