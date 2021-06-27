const fs = require("fs");

const writeFile = (readMeMarkDown) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/ReadMe.md", readMeMarkDown, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "ReadMe created successfully!",
      });
    });
  });
};

module.exports = { writeFile };
