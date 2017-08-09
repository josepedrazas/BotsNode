var builder = require('botbuilder');

var connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
});

var bot = new builder.UniversalBot(connector);

bot.dialog('/', [
    function(session)
    {
       builder.Prompts.text(session,'Como te llamas?');
    },
    function(session,results){
        let msj = results.response;
        session.send(`Hola ${msj}`);
    }
]);