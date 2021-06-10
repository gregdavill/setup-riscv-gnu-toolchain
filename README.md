# setup-riscv-gnu-toolchain

This action sets up a [RISCV GNU toolchain](https://github.com/sifive/freedom-tools/release) environment for use in actions by:

- downloading a version of RISCV GNU toolchain and adding to PATH

# Usage

Using latest release
```yaml
steps:
- uses: actions/checkout@v2
- uses: gregdavill/setup-riscv-gnu-toolchain@v1
- run: riscv64-unknown-elf-gcc --version
```

# License

The scripts and documentation in this project are released under the [ISC](COPYING)
