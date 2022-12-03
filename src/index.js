import app from "./app";
import './database'
import { PORT } from "./config";

app.listen(PORT)
console.log(`Server on: http://127.0.0.1:${PORT}/`)
