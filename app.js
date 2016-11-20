    var restify = require('restify');
    var builder = require('botbuilder');
    var password = "qwRym5Cg3gbm2ReEYkooWx7";
    var appid = "88464178-e11f-445c-a3ad-99e193718153"

    //=========================================================
    // Bot Setup
    //=========================================================

    // Setup Restify Server
    var server = restify.createServer();
    server.listen(process.env.port || process.env.PORT || 3978, function() {
        console.log('%s listening to %s', server.name, server.url);
    });

    // Create chat bot
    var connector = new builder.ChatConnector({
        appId: appid,
        appPassword: password
    });

    var bot = new builder.UniversalBot(connector);
    server.post('/api/messages', connector.listen());

    //=========================================================
    // Bots Dialogs
    //=========================================================

    bot.dialog('/', function(session) {
        session.send("Hello World");
    });


    // var builder = require('botbuilder');

    // var connector = new builder.ConsoleConnector().listen();
    // var bot = new builder.UniversalBot(connector)

    // bot.dialog('/', function(session) {
    //     session.send('Hello World');
    // });