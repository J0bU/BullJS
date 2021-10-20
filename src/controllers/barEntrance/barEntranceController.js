const { barEntrance } = require('../../queue/queues');

module.exports.postEntrance = async (req, res) => {
  const { name, age } = req.body;

  if (!name || !age)
    return res.json({ message: 'The name and age are required!' });

  await barEntrance.add('entrance', { name, age });

  res.json({ OK: `${name} has been added to the entrance queue!` });
};
