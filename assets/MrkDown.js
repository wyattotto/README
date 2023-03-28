const fs = require('fs');

const LicenseBadge = (license) => {
    if (license === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    if (license === "CC-0") {
        return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
    }
    if (license === "PDDL (Public Domain Dedication and License)") {
        return `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`
    }
    if (license === "Mozilla Public License 2.0") {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
}

function RenderedLicense(license){
    if (!license) {
        return "This project has no license";
    }
    else{
        return `## License 
        This project is covered by ${license} license.`
    }
}

function generateMarkdown(data){
   
    const badge =  LicenseBadge(data.license)
    const license = RenderedLicense(data.license)
    return`
${badge}

# ${data.title}

## Description

${data.description}

## Languages used

${data.language}

## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

    Instructions for installation:
    ${data.installation}

## Usage

  ${data.usage}


## Contributing
  
  ${data.contributing}


## Tests
  ${data.test}

## Contact 
  GitHub Username:  ${data.username}

  Email: ${data.email}

 ${license}

`;
}
module.exports = {
    generateMarkdown
}