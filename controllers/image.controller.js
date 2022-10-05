const fs = require('fs/promises');
const path = require('path');

const { BACKAND_URL } = require('../configs/config');

module.exports = {
  getImage: async (req, res, next) => {
    try {
      const filesNames = await fs.readdir(path.join(process.cwd(), 'public'));

      const randomName = filesNames[Math.floor(Math.random() * filesNames.length)];

      res.json(`${BACKAND_URL}/static/${randomName}`);
    } catch (e) {
      next(e);
    }
  },
};
