import { ICommand } from "wokcommands";

export default {
  category: "testing",
  description: "Waves back at you",
  testOnly: true,
  callback: ({ interaction }) => {
    interaction.reply(`Hello ${interaction.user.username}👋`);
  },
} as ICommand;
