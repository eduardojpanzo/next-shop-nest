import "dotenv/config";
import { app } from ".";

const PORT = process.env.PORT || 4004;

app.listen(PORT, () => console.log("Server is running! in port 4004"));
