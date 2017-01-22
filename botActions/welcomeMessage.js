function welcomeMessage(req, res) {
  const { user_name:userName, channel_name:channelName } = req.body;
  const responsePayload = {
    text: 'Welcome ' + userName + ' to the #' + channelName + ' channel!',
  };

  if (user_name !== 'slackbot') {
    return res.status(200).json(responsePayload)
  } else {
    return res.status(200).end();
  }
}

module.exports = welcomeMessage;
