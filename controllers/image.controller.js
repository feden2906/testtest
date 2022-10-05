const fs = require('fs/promises');
const path = require('path');

module.exports = {
  getImage: async (req, res, next) => {
    try {
      const filesNames = await fs.readdir(path.join(process.cwd(), 'public'));
      console.log('$$$$$$',`${req.headers['x-forwarded-proto'] || req.connection.info.protocol}://${req.info.host}${req.url.path}`);
      const randomName = filesNames[Math.floor(Math.random() * filesNames.length)];

      res.json(`http://localhost:5000/static/${randomName}`);
    } catch (e) {
      next(e);
    }
  },
};
