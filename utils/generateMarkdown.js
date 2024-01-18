function generateMarkdown(data) {
  return `
  
# ${data.title}

## Description
${data.description}

## Table of Contents
 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation
  ${data.installation}

## Usage
  ${data.usage}

## License
  ${data.license}

## Contributing
  ${data.contributing}

## Tests
  ${data.tests}

## Questions
  ${data.questions}

  
View this repo on [Github](http://github.com/${data.github})

By ${data.name}
Email ${data.email}
  


`;
}

module.exports = generateMarkdown;
