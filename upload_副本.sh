#!/bin/bash

# 一键上传脚本
# 使用方法：
# 1. 打开终端 (Terminal)
# 2. 运行: cd /Users/liuli/Desktop/评论网站 && bash upload.sh

echo "===== Sarah Johnson 网站上传脚本 ====="
echo ""

# 检查是否安装了git
if ! command -v git &> /dev/null; then
    echo "❌ 错误: 未安装 Git"
    echo "请访问 https://git-scm.com/download/mac 下载安装"
    exit 1
fi

# 进入项目目录
cd "$(dirname "$0")"

# 初始化git（如果还没初始化）
if [ ! -d ".git" ]; then
    echo "📁 初始化 Git 仓库..."
    git init
    git branch -m main
fi

# 配置远程仓库（如果不存在）
REMOTE_URL="https://github.com/bnxp/sarah-johnson-consulting.git"
git remote remove origin 2>/dev/null
git remote add origin "$REMOTE_URL"

echo ""
echo "📤 正在上传文件到 GitHub..."
echo "仓库地址: $REMOTE_URL"
echo ""

# 添加所有文件
git add .

# 提交更改
git commit -m "Update website with pricing section"

# 推送到GitHub
echo ""
echo "⬆️  正在推送到 GitHub..."
git push -u origin main --force

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 上传成功！"
    echo ""
    echo "🌐 网站地址: https://bnxp.github.io/sarah-johnson-consulting/"
    echo ""
    echo "注意: 网站更新可能需要 1-2 分钟生效"
else
    echo ""
    echo "❌ 上传失败"
    echo ""
    echo "可能的原因:"
    echo "1. 网络连接问题"
    echo "2. GitHub 账号权限问题"
    echo "3. 需要登录 GitHub 账号"
    echo ""
    echo "请尝试手动上传到: https://github.com/bnxp/sarah-johnson-consulting"
fi
