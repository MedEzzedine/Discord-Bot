import { ICommand } from "wokcommands";

export default {
  category: "Global",
  description: "Test global commands registration time",
  callback: ({ interaction }) => {
    interaction.reply("It's finally up");
  },
} as ICommand;
