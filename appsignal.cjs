const { Appsignal } = require("@appsignal/nodejs");

new Appsignal({
  active: true,
  name: "nextjs-appsignal-v3",
  pushApiKey: "PUSH-API-KEY",
  logPath: "logs",
  logLevel: "trace"
});
