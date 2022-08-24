const download = require("download-git-repo");
const ora = require("ora");
const chalk = require("chalk");

const downloadFun = function (url, project) {
  const spinner = ora().start();
  spinner.text = "代码正在下载中......";

  download(`direct:${url}`, project, { clone: true }, (err) => {
    if (err) {
      spinner.fail("代码下载失败");
    } else {
      spinner.succeed("代码下载成功");
      console.log(chalk.blue("Done!"), chalk.bold("you run:"));
      console.log(chalk.blue("cd " + project));
      console.log(chalk.blue("npm install "));
      console.log(chalk.blue("npm run dev "));
    }
  });
};

module.exports = downloadFun;
