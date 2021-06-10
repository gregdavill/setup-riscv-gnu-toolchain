const core = require('@actions/core')
const {exec} = require('@actions/exec')
const path = require('path')

main().catch(err => {
  core.setFailed(err.message)
})

async function installRISCVGNUToolchain() {
  if (process.platform === 'linux') {
    let version = core.getInput('riscv-gnu-version')
    if (version == null)
      await exec(path.join(__dirname, 'install-riscv-gnu-toolchain'))
    else 
      await exec(path.join(__dirname, 'install-riscv-gnu-toolchain'), [version])
      
  }
}

async function main() {
  checkPlatform()

  console.log(`##[group]Installing RISCV GNU Toolchain`)

  await installRISCVGNUToolchain()
  console.log(`##[endgroup]`)
  core.addPath(`${process.env.RUNNER_TEMP}/.setup-riscv-gnu-toolchain/bin`)
}

function checkPlatform() {
  if (process.platform !== 'linux')
    throw new Error(
      '@actions/setup-riscv-gnu-toolchain only supports Ubuntu Linux at this time'
    )
}

