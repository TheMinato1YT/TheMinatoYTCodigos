const {
    Client,
    GatewayIntentBits,
    Collection,
    Events
} = require('discord.js');

const config = require('./config.json');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

client.config = config;

client.events = new Collection();
client.commands = new Collection();
client.pcommands = new Collection();
client.buttons = new Collection();
client.menus = new Collection();

client.once(Events.ClientReady, () => {
    console.log("================================");
    console.log("✅ Bot encendido correctamente");
    console.log(`🤖 Nombre: ${client.user.tag}`);
    console.log(`🆔 ID: ${client.user.id}`);
    console.log("================================");
});

client.login(config.token);
