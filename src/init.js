import "@babel/polyfill";
import app from "./app";
import ip from "ip";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const handleListening = () => {
  console.log(`🟢  Listening on : http://localhost:${PORT}`);
  console.log(`( •̀ ω •́ )✧  Ip : ${ip.address()}`);
};

app.listen(PORT, handleListening);
