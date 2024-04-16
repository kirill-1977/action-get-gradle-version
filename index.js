const fs = require('fs');
const core = require('@actions/core');

try {
  const file = core.getInput('file') || 'build.gradle';
  console.log(`Using ${file}`);
  const bg = fs.readFileSync(file) + "";
  
  let version = 'latest';

  bg.split("\n").forEach((r) => {
    if (r.startsWith("version=") || r.startsWith("version =")) {
      version = r.replace(/(version|=|"| )/g, "");
    }
  });
  
  console.log(version);
  core.setOutput("version", version.replaceAll("'", ""));
} catch (error) {
  core.setFailed(error.message);
}
