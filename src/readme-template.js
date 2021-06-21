const badgeCheck = (data) => {
  if (data.license === "None") {
    return "";
  }

  return `
  ## Badges
  ![badge](https://img.shields.io/badge/License-${data.license}-brightgreen)
  `;
};

const codeOfConduct = (conductLink) => {
  if (!conductLink.contribution) {
    return "";
  }

  return `
  ## Contributing
  Please see the link below for our code of conduct for contributing to this project.
  https://www.contributor-covenant.org/version/2/0/code_of_conduct/
  `;
};

const testOption = (test) => {
  if (!test) {
    return "";
  }

  return `
  ## Test
  Provide your test code here
  `;
};

module.exports = (readMeData) => {
  return `
  # ${readMeData.title}
  
  ${badgeCheck(readMeData)}
  
  ## Description 
  ${readMeData.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${readMeData.installation}

  ## Usage 
  ${readMeData.usage}
  
  ## License
  ${readMeData.license}
  
  ${codeOfConduct(readMeData)}
  
  ${testOption(readMeData)}
  
  ## Questions
  For any questions please reach out to me at 
  
  Email: <${readMeData.email}>

  GitHub: [https://github.com/${readMeData.github}](https://github.com/${
    readMeData.github
  }) 
  `;
};
// module.exports = generateReadMe()
