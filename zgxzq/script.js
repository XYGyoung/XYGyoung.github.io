var ans = [
    "北京", "天津", "河北", "山西", "内蒙古",
    "辽宁", "吉林", "黑龙江", "上海", "江苏",
    "浙江", "安徽", "福建", "江西", "山东",
    "河南", "湖北", "湖南", "广东", "广西",
    "海南", "重庆", "四川", "贵州", "云南",
    "西藏", "陕西", "甘肃", "青海", "宁夏",
    "新疆", "台湾", "渤", "黄", "东",
    "南", "台湾", "琼州", "长", "黄",
    "黑龙", "乌苏里", "准噶尔", "柴达木", "塔里木",
    "四川", "青藏", "内蒙古", "黄土", "云贵",
    "东北", "华北", "长江中下游", "辽东", "山东",
    "东南", "阿尔泰", "天山", "昆仑", "喜马拉雅",
    "祁连", "横断", "阴山", "贺兰", "六盘",
    "秦", "南", "大兴安", "太行", "巫",
    "雪峰", "小兴安", "长白", "武夷", "台湾"]
var tigan = [
    "市", "市", "省", "省", "自治区",
    "省", "省", "省", "市", "省",
    "省", "省", "省", "省", "省",
    "省", "省", "省", "省", "壮族自治区",
    "省", "市", "省", "省", "省",
    "自治区", "省", "省", "省", "回族自治区",
    "维吾尔自治区", "省", "海", "海", "海",
    "海", "海峡", "海峡", "江", "河",
    "江", "江", "盆地", "盆地", "盆地",
    "盆地", "高原", "高原", "高原", "高原",
    "平原", "平原", "平原", "丘陵", "丘陵",
    "丘陵", "山脉", "山脉", "山脉", "山脉",
    "山脉", "山脉", "山脉", "山", "山",
    "岭", "岭", "岭", "山脉", "山",
    "山", "岭", "山脉", "山脉", "山脉",]
var randarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]
var quiz = []
var quiznote = 0
var corrents = 0
var time = 0
var score = 0
if (localStorage.getItem("best") == null) localStorage.setItem("best", 0)
document.getElementById("scoreing").innerText = localStorage.getItem("best")
function setQuiz() {
    for (let i = 0; i < 40; i++) {
        var a = Math.floor(Math.random() * randarr.length)
        quiz.push(randarr[a])
        randarr.splice(a, 1)
    }
    randarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]
    document.getElementById('clg').setAttribute("onclick", "showQuiz()")
    document.getElementById('clg').innerText = "提交"
    showQuiz()
    time = Date.now()
}

function showQuiz() {
    if (document.getElementById('ans').value == ans[quiz[quiznote - 1] - 1]) {
        corrents += 1
    }
    if (quiznote == 40) {
        time = (Date.now() - time) / 1000
        score = Math.floor(corrents * 25000 + 72000 - 200 * time)
        rep()
        return;
    }
    document.getElementById('quiz').setAttribute("src", "quiz/freecompress-" + quiz[quiznote].toString() + ".png")
    document.getElementById('tigan').innerText = tigan[quiz[quiznote]-1]
    quiznote += 1
    document.getElementById('note').innerText = quiznote.toString()+"/40"
    document.getElementById('ans').value = ""
}

function rep() {
    document.getElementById("rep").style.display = "block"
    var rank = ""
    document.getElementById("score").innerText = score
    document.getElementById("time").innerText = time.toString() + "s"
    document.getElementById("acc").innerText = (corrents * 2.5).toFixed(2).toString() + "%"
    if (score < 700000) rank = "F"
    else if (score < 820000) rank = "C"
    else if (score < 880000) rank = "B"
    else if (score < 920000) rank = "A"
    else if (score < 960000) rank = "S"
    else if (score < 1000000) rank = "V"
    else rank = "EX"
    document.getElementById("rank").innerText = rank
    if (localStorage.getItem("best") < score) localStorage.setItem("best", score)
    document.getElementById("best").innerText = localStorage.getItem("best")
}