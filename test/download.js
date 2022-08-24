const download = require("download-git-repo");

// 下载gitee远程仓库代码
download(
  "direct:https://gitee.com/li_ya_xu/eat_what.git",
  "./xxx",
  { clone: true },
  (err) => {
    console.log(err);
  }
);
