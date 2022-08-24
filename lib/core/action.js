const inquirer = require("inquirer");
const config = require("../../config");
const downloadFun = require("./download");

const myAction = async (project, args) => {
  // 命令行的执行逻辑代码
  // console.log(project, args);
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "framwork",
      choices: config.framwork,
      message: "请选择您所使用的框架",
    },
  ]);

  // 下载远程仓库代码
  downloadFun(config.framworkUrl[answer.framwork], project);
};

module.exports = myAction;
