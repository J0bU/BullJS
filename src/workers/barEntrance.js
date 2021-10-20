module.exports = (job, done) => {
  const { bar } = require('../queue/queues');
  try {
    const { name, age } = job.data;
    if (age < 18) throw new Error('You can not access to this site!');
    bar.add({ name, age });
    bar.on('completed', (job, result) => {
      console.log(`Job completed with result ${JSON.stringify(result)}`);
    });
    done(null, job.data);
  } catch (err) {
    done(err);
  }
};
