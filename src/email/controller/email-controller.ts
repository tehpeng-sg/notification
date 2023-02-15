const getTest = (req, res) => {
  res.status(201).json('email get test');
};

const getTest2 = (req, res) => {
  res.status(404).json('email error test');
};

module.exports = {
  getTest,
  getTest2,
};
