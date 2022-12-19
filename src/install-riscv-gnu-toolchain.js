const core = require('@actions/core')
const {exec} = require('@actions/exec')
const path = require('path')

main().catch(err => {
  core.setFailed(err.message)
})

async function installRISCVGNUToolchain() {
  console.log(process.platform)
  if (process.platform === 'linux' || process.platform == 'darwin' || process.platform == 'win32') {
      let version = core.getInput('version')
      let os = process.platform

      if (version == null){
        await exec('bash', [path.join(__dirname, 'install-riscv-gnu-toolchain'), os])
      }
      else {
        await exec('bash', [path.join(__dirname, 'install-riscv-gnu-toolchain'), os, version])
      }
  } 
}

async function main() {
  console.log(`##[group]Installing RISCV GNU Toolchain`)
  await installRISCVGNUToolchain()
  
  console.log(`##[endgroup]`)
  core.addPath(`${process.env.RUNNER_TEMP}/.setup-riscv-gnu-toolchain/bin`)
}

