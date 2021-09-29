# Get gradle version action 
(a fork of get npm version action: https://github.com/pchynoweth/action-get-npm-version)

This action extracts the version string from the build.gradle file.

## Inputs

### `file`

**Optional** The build.gradle file. Default `"build.gradle"`.

## Outputs

### `version`

the version inside build.gradle file.

## Example usage

```yaml
uses: action-get-gradle-version@master
```
