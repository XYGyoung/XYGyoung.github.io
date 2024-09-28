var ans = ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "台湾"]
var randarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
var quiz = []
var quiznote = 0
var corrents = 0
var time = 0
var score = 0
if (localStorage.getItem("best") == null) localStorage.setItem("best", 0)
function setQuiz() {
    for (let i = 0; i < 25; i++) {
        var a = Math.floor(Math.random() * randarr.length)
        quiz.push(randarr[a])
        randarr.splice(a, 1)
    }
    randarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
    document.getElementById('clg').setAttribute("onclick", "showQuiz()")
    document.getElementById('clg').innerText = "提交"
    showQuiz()
    time = Date.now()
}

function showQuiz() {
    if (document.getElementById('ans').value == ans[quiz[quiznote - 1] - 1]) {
        corrents += 1
    }
    if (quiznote == 25) {
        time = (Date.now() - time) / 1000
        score = corrents * 40000 + 60000 - 1000 * time
        rep()
        return;
    }
    document.getElementById('quiz').setAttribute("src", "quiz/" + quiz[quiznote].toString() + ".png")
    quiznote += 1
    document.getElementById('ans').value = ""
}

function rep() {
    document.getElementById("rep").style.display="block"
    var rank = ""
    document.getElementById("score").innerText = score
    document.getElementById("time").innerText = time.toString() + "s"
    document.getElementById("acc").innerText = (corrents * 4).toString() +"%"
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