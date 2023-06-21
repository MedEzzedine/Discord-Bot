import { Client, IntentsBitField, Partials } from "discord.js";
import WOK from "wokcommands";
import path from "path";
import dotenv from "dotenv";
import keepAlive from "./keep_alive";

dotenv.config();
keepAlive.listen(process.env.PORT || 8080);

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages],
});

//on client ready
client.once("ready", () => {
  console.log("Bot is ready");

  //@ts-expect-error
  new WOK(client, {
    commandDir: path.join(__dirname, "commands"),
    testServers: ["805374246339477535", "503216209488248854"],
    typeScript: true,
  });
});

//client login using bot token
client.login(process.env.TOKEN);
