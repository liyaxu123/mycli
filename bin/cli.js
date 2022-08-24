#! /usr/bin/env node
const { program } = require("commander");

const myhelp = require("../lib/core/help");
myhelp(program);

const mycommander = require("../lib/core/mycommander");
mycommander(program);

// console.log("mycli");
// 获取命令行交互参数
// console.log(process.argv[2]);
// if (process.argv[2] == "--help") {
//   console.log("获取到了命令参数");
// }

program.parse(process.argv);
