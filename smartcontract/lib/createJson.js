const fs = require('fs');

const createJSON = async (data, fileName) => {
  const text = JSON.stringify(data);
  await fs.writeFileSync(`${fileName}.json`, text);
};

module.exports = createJSON;
