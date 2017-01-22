function suggestion(req, res) {
  const { user_name, channel_name } = req.body;
  const responsePayload = {
    text: 'Hello @' + user_name + ', it\'s Schnitzel time!',
  };
  if (user_name !== 'slackbot') {
    return res.status(200).json(responsePayload)
  } else {
    return res.status(200).end();
  }
}

module.exports = suggestion;
