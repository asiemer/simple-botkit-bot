var token = process.env.APIKEY || "";

var Botkit = require('botkit');
var fullChannelList = [];

var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: token
})

bot.startRTM(function(err,bot,payload) 
{
	console.log("##############################")
	console.log("To use the bot, type")
	console.log("@botname hello")
	console.log("##############################")

	if(token == "") {
		console.log("##############################")
		console.log("Specify the environment variable for APIKEY");
		console.log("APIKEY={your key here} node bot");
		console.log("##############################")
	}
	else {
		console.log(token);
	}

	if (err) 
	{
	    throw new Error('Could not connect to Slack');
	}

	//startUp(bot);

});

controller.hears(["hello"], ["metion", "direct_mention", "direct_message"],
	function(bot,message) {
		console.log("HEARD : " + message.text);
		bot.reply(message, "Hey there!");
	});