const { Client, GatewayIntentBits } = require("discord.js");
const fetch = require("node-fetch");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Bot online 🔥");
});

app.listen(process.env.PORT || 3000);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log(`🔥 Logado como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith("!ia")) return;

  const pergunta = message.content.slice(3).trim();
  if (!pergunta) return message.reply("Pergunta algo 😐");

  try {
    const resposta = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: pergunta }] }]
        })
      }
    );

    const data = await resposta.json();
    const texto = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!texto) return message.reply("Erro na resposta da IA 💀");

    message.reply(texto.slice(0, 2000));

  } catch (err) {
    console.log(err);
    message.reply("Erro na IA 💀");
  }
});

client.login(process.env.TOKEN);
