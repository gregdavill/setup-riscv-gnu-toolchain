const core = require('@actions/core')
const {exec} = require('@actions/exec')
const path = require('path')

main().catch(err => {
  core.setFailed(err.message)
})

async function installRISCVGNUToolchain() {
  if (process.platform === 'linux') {
    await exec(path.join(__dirname, 'install-riscv-gnu-toolchain'))
  }
}

async function main() {
  checkPlatform()

  console.log(`##[group]Installing RISCV GNU Toolchain`)

  await installRISCVGNUToolchain()
  console.log(`##[endgroup]`)
  core.addPath(`${process.env.RUNNER_TEMP}/.setup-riscv-gnu-toolchain/riscv64-unknown-elf-toolchain-10.2.0-2020.12.8-x86_64-linux-ubuntu14/bin`)
}

function checkPlatform() {
  if (process.platform !== 'linux')
    throw new Error(
      '@actions/setup-riscv-gnu-toolchain only supports Ubuntu Linux at this time'
    )
}

