module.exports = (job, done) => {
  try {
    done(null, job.data);
  } catch (err) {
    done(err);
  }
};
