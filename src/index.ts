import * as dotenv from "dotenv";

dotenv.config();

import { server } from "./config/app";

function startServer() {
  const PORT = process.env.PORT || 8080;

  server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}
setImmediate(startServer)
export default server



