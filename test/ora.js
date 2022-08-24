const ora = require("ora");
const spinner = ora().start();
spinner.text = "loading...";

setTimeout(() => {
  spinner.succeed("任务结束");
  // spinner.fail("失败");
  // spinner.info("信息提示");
}, 3000);
