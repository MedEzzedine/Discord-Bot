import http from "http";

export default http.createServer((req, res) => {
  res.write("OK");
  res.end();
});
