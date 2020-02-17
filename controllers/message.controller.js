var Messages = [
  { Name: 'Devesh', Message: 'I am from API' },
  { Name: 'Sumit', Message: 'I am from Bank' }
];

exports.getMessage = (req, res) => {
  res.send(Messages);
};

exports.SaveMessage = (req, res) => {
  Messages.push(req.body);
  //io.emit('message',req.body)
  res.io.emit('message', req.body);
  res.sendStatus(200);
};
