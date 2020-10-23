// download-git-repo:Download and extract a git repository (GitHub, GitLab, Bitbucket) from node.
// ora: 实现node.js命令行环境的loading效果，和显示各种状态的图标等
const  {promisify} =require('util');
module.exports.clone=async function (repo,desc){
    const download= promisify(require('download-git-repo'));
    const ora =require('ora');
    const spinner =ora(`下载...${repo}`);
    spinner.start();
    await download(repo,desc);
    spinner.succeed();
}