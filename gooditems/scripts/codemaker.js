//密钥生成器
function make() {
    var key = Math.round(Math.random() * 400) + 200;
    var mkey = 559;
    var enc1 = (key ** 2 - mkey) * 11;
    var cod1 = enc1.toString(16);
    if (cod1.length == 5) cod1 = '0' + cod1;
    var enc2 = (enc1 - 5 * mkey) * 3 - 8 * mkey;
    var cod2 = cod1 + '-' + enc2.toString(16);
    var enc3 = (enc2 - enc1) * 2 - 6 * mkey;
    var cod3 = cod2 + '-' + enc3.toString(16);
    var enc4 = (enc3 - enc2) * 3 - mkey;
    var cod4 = cod3 + '-' + enc4.toString(16);
    var enc5 = (enc4 - enc3) * 3 - 6 * mkey;
    var cod5 = cod4 + enc5.toString(16);
    document.getElementById("key").innerText = cod5;
}