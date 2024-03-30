function yuanzhu() {
    r = document.getElementById('ar')
    d = document.getElementById('ad')
    c = document.getElementById('ac')
    h = document.getElementById('ah')
    sd = document.getElementById('sd')
    sc = document.getElementById('sc')
    sb = document.getElementById('sb')
    v = document.getElementById('av')
    list = [parseFloat(r.value), parseFloat(d.value), parseFloat(c.value), parseFloat(h.value), parseFloat(sd.value), parseFloat(sc.value), parseFloat(sb.value), parseFloat(v.value)]
    scls = [parseFloat(r.value), parseFloat(d.value), parseFloat(c.value), parseFloat(sd.value)]
    hcls = [parseFloat(h.value), parseFloat(sc.value), parseFloat(sb.value), parseFloat(v.value)]
    acls = [parseFloat(sc.value), parseFloat(sb.value), parseFloat(v.value)]
    nans = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] <= 0) {
            alert("爱算算不算滚")
            return -1
        }
        if (list[i].toString() == 'NaN') {
            nans += 1
        }
    }
    if (nans > 6) {
        alert("缺少条件")
        return -1
    }
    if (isntnan(3, 3)) {
        a = 0
        b = list[3]
        if (isntnan(0, 3)) {
            a = list[0]
        } else if (isntnan(1, 3)) {
            a = list[1] / 2
        } else if (isntnan(2, 3)) {
            a = list[2] / 6.28
        } else if (isntnan(4, 3)) {
            a = Math.sqrt(list[4] / 3.14)
        } else if (isntnan(5, 3)) {
            a = list[5] / b / 6.28
        } else if (isntnan(6, 3)) {
            a = (-b + Math.sqrt(b * b + list[6] / 3.14 * 2)) / 2
        } else if (isntnan(7, 3)) {
            a = Math.sqrt(list[7] / b / 3.14)
        }
        r.value = a
        d.value = 2 * a
        c.value = 6.28 * a
        sd.value = 3.14 * a * a
        sc.value = 6.28 * a * b
        sb.value = 6.28 * a * (a + b)
        v.value = 3.14 * a * a * b
        return 0
    }
    if (isntnan(5, 5)) {
        a = 0
        b = list[5]
        if (isntnan(0, 5)) {
            a = list[0]
        } else if (isntnan(1, 5)) {
            a = list[1] / 2
        } else if (isntnan(2, 5)) {
            a = list[2] / 6.28
        } else if (isntnan(4, 5)) {
            a = Math.sqrt(list[4] / 3.14)
        }
        r.value = a
        d.value = 2 * a
        c.value = 6.28 * a
        h.value = b / a / 6.28
        sd.value = 3.14 * a * a
        sc.value = b
        sb.value = 6.28 * a * (a + b / a / 6.28)
        v.value = a * b / 2
        return 0
    }
    if (isntnan(6, 6)) {
        a = 0
        b = list[6]
        if (isntnan(0, 6)) {
            a = list[0]
        } else if (isntnan(1, 6)) {
            a = list[1] / 2
        } else if (isntnan(2, 6)) {
            a = list[2] / 6.28
        } else if (isntnan(4, 6)) {
            a = Math.sqrt(list[4] / 3.14)
        } else if (isntnan(5,6)) {
            a = Math.sqrt((list[6] - list[5]) / 3.14)
        }
        r.value = a
        d.value = 2 * a
        c.value = 6.28 * a
        h.value = b / a / 6.28 - a
        sd.value = 3.14 * a * a
        sc.value = 6.28 * a * (b / a / 6.28 - a)
        sb.value = b
        v.value = 3.14 * a * a * (b / a / 6.28 - a)
        return 0
    }
    if (isntnan(7, 7)) {
        a = 0
        b = list[7]
        if (isntnan(0, 7)) {
            a = list[0]
        } else if (isntnan(1, 7)) {
            a = list[1] / 2
        } else if (isntnan(2, 7)) {
            a = list[2] / 6.28
        } else if (isntnan(4, 7)) {
            a = Math.sqrt(list[4] / 3.14)
        } else if (isntnan(5, 7)) {
            a = 2 * b / list[5]
        } else if (isntnan(6, 7)) {
            alert("算不出来……")
        }
        r.value = a
        d.value = 2 * a
        c.value = 6.28 * a
        h.value = b / a / a / 3.14
        sd.value = 3.14 * a * a
        sc.value = 2 * b / a
        return 0
    }
}
function isntnan(a, b) {
    if (list[a].toString() != 'NaN' & list[b].toString() != 'NaN') {
        return true
    }
    return false
}