let prize = {
    '0': { '0': 0, '1': 0, '2': 5 },
    '1': { '0': 0, '1': 0, '2': 5 },
    '2': { '0': 0, '1': 5, '2': 15 },
    '3': { '0': 5, '1': 15, '2': 200 },
    '4': { '0': 100, '1': 300, '2': 3000 },
    '5': { '0': 10000, '1': 300000, '2': 10000000 }
}
let current = {
    'red': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 },
    'blue': { '1': 0, '2': 0 }
}
let betting = {
    'red': { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 },
    'blue': { '1': 0, '2': 0 }
}
let moneyleft = localStorage.getItem('money')
if (moneyleft == null) {
    localStorage.setItem('money', 1000)
    moneyleft = 1000
}
window.onload = function () {
    document.getElementById('leftmoney').innerText = moneyleft.toString()
}
function getRandom(color) {
    var list = new Array()
    for (let i = 0; i < (12 + color * 23); i++) {
        list.push(i + 1)
    }
    list.sort(function () {
        return 0.5 - Math.random()
    })
    return list
}
function x(str) {
    console.log(str)
}
function show(color) {
    var pre = getRandom(color)
    var code = new Array()
    if (color) {
        var ids = ["fst", "scd", "trd", "fth", "fft"]
        for (let i = 0; i < 5; i++) {
            var a = (pre[pre[i] - 1]).toString()
            if (a.length == 1) {
                a = '0' + a
            }
            code.push(a)
        }
        code.sort()
        for (let i = 0; i < 5; i++) {
            current['red'][(i + 1).toString()] = parseInt(code[i])
            document.getElementById(ids[i]).innerText = code[i]
        }
    } else {
        var ids = ["bls", "bfs"]
        for (let i = 0; i < 2; i++) {
            var a = (pre[pre[i] - 1]).toString()
            if (a.length == 1) {
                a = '0' + a
            }
            code.push(a)
        }
        code.sort()
        for (let i = 0; i < 2; i++) {
            current['blue'][(i + 1).toString()] = parseInt(code[i])
            document.getElementById(ids[i]).innerText = code[i]
        }
    }
}
function showAll() {
    show(0)
    show(1)
    x(current)
}
function isntNull(str) {
    var a = new Array(7)
    for (let i = 0; i < 7; i++) {
        a[i] = document.getElementsByClassName(str)[i].value
    }
    if (a.indexOf('') == -1) {
        return true
    } else {
        return false
    }
}
function needmoney() {
    var ae = ['A', 'B', 'C', 'D', 'E']
    var money = 0
    for (let i = 0; i < 5; i++) {
        if (isntNull(ae[i])) {
            money += 2
        }
    }
    return money
}
function showdialog() {
    if (needmoney() == 0) {
        alert("你尚未选完号！请在投注界面选完号。")
        return null
    }
    document.getElementById('dialog').style.display = "block"
    document.getElementById('dauj').innerText = needmoney()
}
function stopbet() {
    document.getElementById('dialog').style.display = "none"
}
function gobet() {
    document.getElementById('dialog').style.display = "none"
    if (moneyleft < 2) {
        alert("余额不足！已为你补足")
        localStorage.setItem('money',100)
        return null
    }
    showAll()
    moneyleft -= needmoney()
    var ae = ['A', 'B', 'C', 'D', 'E']
    var redcode = new Array(5)
    var bluecode = new Array(2)
    var curr = new Array(5)
    var curb = new Array(2)
    var totalprize = 0
    var rp = 0
    var bp = 0
    for (let i = 0; i < 5; i++) {
        curr[i] = current['red'][(i+1).toString()]
    }
    for (let i = 0; i < 2; i++) {
        curb[i] = current['blue'][(i+1).toString()]
    }
    x(curr)
    x(curb)
    for (let i = 0; i < 5; i++) {
        if (isntNull(ae[i])) {
            for (let j = 0; j < 5; j++) {
                redcode[j] = document.getElementById('r' + (i + 1).toString() + (j + 1).toString()).value
            }
            redcode.sort()
            for (let j = 0; j < 5; j++) {
                betting['red'][(j+1).toString()] = redcode[j]
            }
            for (let j = 0; j < 2; j++) {
                bluecode[j] = document.getElementById('b' + (i + 1).toString() + (j + 1).toString()).value
            }
            bluecode.sort()
            for (let j = 0; j < 2; j++) {
                betting['blue'][(j+1).toString()] = bluecode[j]
            }
            x(betting)
            for (let j = 0; j < 5; j++) {
                if (curr.indexOf(parseInt(betting['red'][(j+1).toString()])) != -1) {
                    rp++
                }
            }
            for (let j = 0; j < 2; j++) {
                if (curb.indexOf(parseInt(betting['blue'][(j+1).toString()])) != -1) {
                    bp++
                }
            }
            x(rp)
            x(bp)
            totalprize += prize[rp.toString()][bp.toString()]
        }
    }
    moneyleft += totalprize
    document.getElementById('leftmoney').innerText = moneyleft.toString()
    localStorage.setItem('money', moneyleft)
}