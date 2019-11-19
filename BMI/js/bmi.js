// 當HTML文件載入完成時執行

$(() => {
    // 這裡就是程式的開始
    console.log('JS 正常執行')

    // 輸入
    var height = $('#inputHeight').val()
    var weight = $('#inputWeight').val()

    // 計算BMI
    var h = Number(height) / 100
    var w = Number(weight)
    var hh = h * h
    var bmi = w / hh

    // 輸出
    $('#outputBMI').val(bmi)
})