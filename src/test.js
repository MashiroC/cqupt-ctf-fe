function test(author, item) {
    let str;
    if (author == null) {
        str = item.author.nickname = " 评论 " + item.content;
    } else {
        str = item.author.nickname + " 回复 " + author.nickname + item.content + "<br>";
    }
    for (commit in item.childs) {
        str += test(item.author, commit);
    }
    return str;
}

function main() {
    let data = "";
    let str = "";
    for (item in data) {
        str += test(null, item)
    }
}