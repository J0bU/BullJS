const { bar } = require('../../queue/queues');

module.exports = {
  getAll: async (req, res) => {
    const total = await bar.getCompletedCount();
    res.json({
      total: `The total is ${total}`
    });
  }
};
