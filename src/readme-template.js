const badgeCheck = (data) => {
  const formattedBadge = data.license.split(" ").join("_");
  if (data.license === "None") {
    return "";
  }
  return `
  ![badge](https://img.shields.io/badge/License-${formattedBadge}-brightgreen)

  ---
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

  ---

  `;
};

const contributionTable = (conductTableContents) => {
  if (!conductTableContents.contribution) {
    return "";
  }

  return `
  * [Contributing](#contributing)
  `;
};

const testOption = (test) => {
  if (!test.test) {
    return "";
  }

  return `
  ## Test
  ${test.test}

  ---

  `;
};

const testTable = (testTableContents) => {
  if (!testTableContents.test) {
    return "";
  }

  return `
  * [Test](#test)
  `;
};

const licenseCheck = (selectedLicense) => {
  if (selectedLicense.license === "MIT") {
    return `
  ## License
  MIT

  Copyright (c) ${new Date().getFullYear()} ${selectedLicense.name}

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  ---

  `;
  } else if (selectedLicense.license === "Apache 2.0") {
    return `
  ## License
  Apache 2.0

  Copyright (c) ${new Date().getFullYear()} ${selectedLicense.name} 

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  ---

`;
  } else if (selectedLicense.license === "GNU") {
    return `
  ## License
  GNU

  Copyright (c) ${new Date().getFullYear()}  ${selectedLicense.name}

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details <https://www.gnu.org/licenses/>. 

  ---

  `;
  } else if (selectedLicense.license === "ISC") {
    return `
  ## License
  ISC
  
  Copyright (c) ${new Date().getFullYear()} ${selectedLicense.name}

  Permission to use, copy, modify, and/or distribute this software for any purpose
  with or without fee is hereby granted, provided that the above copyright notice
  and this permission notice appear in all copies.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND 
  FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, 
  OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA 
  OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, 
  ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

  ---

  `;
  }
  return "";
};

const licenseTable = (licenseTableContents) => {
  if (licenseTableContents.license != "None") {
    return `
  * [License](#license)
  `;
  }
  return "";
};

const generateReadMe = (readMeData) => {
  return `
  # ${readMeData.title}
  
  ${badgeCheck(readMeData)}
  
  ## Description 
  ${readMeData.description}
    
  ---

  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  ${licenseTable(readMeData)}
  ${contributionTable(readMeData)}
  ${testTable(readMeData)}
  * [Questions](#questions)
  
  ---

  ## Installation
  ${readMeData.installation}

  ---
  
  ## Usage 
  ${readMeData.usage}

  ---
  
  ${licenseCheck(readMeData)}
  
  ${codeOfConduct(readMeData)}
  
  ${testOption(readMeData)}
  
  ## Questions
  For any questions please contact me directly.
  
  Email: <${readMeData.email}>
  
  GitHub: [https://github.com/${readMeData.github}](https://github.com/${
    readMeData.github
  }) 

  Made By ${readMeData.name} ${new Date().getFullYear()}

  ---

  `;
};

module.exports = (readMeData) => generateReadMe(readMeData);
