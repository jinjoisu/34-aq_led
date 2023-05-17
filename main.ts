input.onButtonPressed(Button.A, function () {
    kitronik_air_quality.measureData()
    kitronik_air_quality.show(kitronik_air_quality.readTemperature(kitronik_air_quality.TemperatureUnitList.C), 1, kitronik_air_quality.ShowAlign.Left)
})
input.onButtonPressed(Button.AB, function () {
    kitronik_air_quality.measureData()
    kitronik_air_quality.show(kitronik_air_quality.getAirQualityScore(), 3, kitronik_air_quality.ShowAlign.Left)
})
input.onButtonPressed(Button.B, function () {
    kitronik_air_quality.measureData()
    kitronik_air_quality.show(kitronik_air_quality.readeCO2(), 2, kitronik_air_quality.ShowAlign.Left)
})
basic.showIcon(IconNames.No)
let statusLEDs = kitronik_air_quality.createAirQualityZIPDisplay()
statusLEDs.showColor(kitronik_air_quality.colors(ZipLedColors.Red))
kitronik_air_quality.setupGasSensor()
kitronik_air_quality.calcBaselines()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (kitronik_air_quality.getAirQualityScore() < 50) {
        statusLEDs.setZipLedColor(0, kitronik_air_quality.colors(ZipLedColors.Green))
    } else if (kitronik_air_quality.getAirQualityScore() >= 50 && kitronik_air_quality.getAirQualityScore() < 100) {
        statusLEDs.setZipLedColor(0, kitronik_air_quality.colors(ZipLedColors.Yellow))
    } else if (kitronik_air_quality.getAirQualityScore() >= 100) {
        statusLEDs.setZipLedColor(0, kitronik_air_quality.colors(ZipLedColors.Red))
    }
    statusLEDs.show()
})
