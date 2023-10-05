// --- Os
import { platform, arch, cpus } from 'node:os'
import { readFile } from 'node:fs/promises'
import pc from 'picocolors'
console.log(platform())
console.log(arch())
console.log(cpus())
// --- Fs
// const fs = require("node:fs")

// const st = fs.statSync("./a1.txt")
readFile('./a1.txt', 'utf-8').then(text => {
  console.log(pc.green(text))
})
console.log('Leyendo')
