const fs = require('fs');
const core = require('@actions/core');

try {
  const file = core.getInput('file') || 'package.json';
  console.log(`Using ${file}`);
  const bg = fs.readFileSync(file) + "";
  
  let version = 'latest';

  bg.split("\n").forEach((r) => {
    if (r.startsWith("version=") || r.startsWith("version =")) {
      version = r.replace(/(version|=|"| )/g, "");
    }
  });
  
  console.log(version);
  core.setOutput("version", version);
} catch (error) {
  core.setFailed(error.message);
}
