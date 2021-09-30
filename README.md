# Get gradle version action 
(a fork of get npm version action: https://github.com/pchynoweth/action-get-npm-version)

This action extracts the version string from the build.gradle file.

## Example usage

```yaml

name: GET GRADLE VERSION

on:
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      version: ${{ steps.version.outputs.version }}              # <- put the version to output of the current job 
    steps:                                                       #    to share the version between different jobs
      - uses: actions/checkout@v2
      
      
      
      - uses: thecodemonkey/action-get-gradle-version@master     # <- USE THIS ACTION TO READ THE VERSION FROM BUILD.GRADLE
        id: version                                              # <- give this step an id to access the output of the step
        
        
        
        
      - run: 'echo version ${{ steps.version.outputs.version }}' # <- access the version
 
  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - run: 'echo version ${{needs.build.outputs.version}}'     # <- access the version in another job
      
```

## Inputs

### `file`

**Optional** The build.gradle file. Default `"build.gradle"`.

use this input parameter if the build.gradle file is in a different directory.

```yaml

  - uses: thecodemonkey/action-get-gradle-version@master
    with:
      file: module/subfolder/build.gradle

```


## Outputs

### `version`

the version inside build.gradle file. You have to give the step an id to access the output.

```yaml

  - uses: thecodemonkey/action-get-gradle-version@master
    id: getversion
  - run: 'echo version ${{ steps.getversion.outputs.version }}' 

```
