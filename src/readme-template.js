const badgeCheck = (badge) => {
  if (!badge) {
    return;
  } else {
    return `## Badges
    ![badge](https://img.shields.io/github/languages/top/${badge}/badge)`;
  }
};

const codeOfConduct = (conductLink) => {
  if (!conductLink) {
    return;
  } else {
    return `## Contributing
    Please see the link below for our code of conduct for contributing to this project.
    https://www.contributor-covenant.org/version/2/0/code_of_conduct/`;
  }
};

const testOption = (test) => {
  if (!test) {
    return;
  } else {
    return `## Test
    Provide your test code here`;
  }
};

const generateReadMe = (readMeArr) => {
  return;
  `# Your Project Title

  ${badgeCheck}

  ## Description 
  

  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#questions)

  ## Installation
  
  ## Usage 
  
  ## License 

  ${codeOfConduct}

  ${testOption}
  
  ## Questions`;
};
