        function getIeee754_32(number) {
            let temp_array = new Float32Array([number])
            return temp_array[0]
        }
        function nineFloats_repeate(averFloat, dig) {
                    let finalFloat = 0.00
                    for (let i = 0; i < 9; i++) {
                        finalFloat = getIeee754_32(finalFloat + getIeee754_32(averFloat))
                    }
                    return finalFloat
                }

                function tradeUp(totalFloat, minFloat, maxFloat) {
                    let tradeUpResult = getIeee754_32(getIeee754_32(getIeee754_32(totalFloat) / getIeee754_32(10)) * (getIeee754_32(maxFloat) - getIeee754_32(minFloat)) + getIeee754_32(minFloat))
                    return tradeUpResult
                }

        /////计算10简单结果
        function caculte_myFloat() {
            var myItems = document.getElementsByClassName("solo_input")
            let tenCaculate_value = getIeee754_32(0)
            for (let item of myItems) {
                tenCaculate_value = getIeee754_32(tenCaculate_value + getIeee754_32(item.value))
            }
            document.getElementById('tenCaculate_value').value = getIeee754_32(tenCaculate_value / getIeee754_32(10))
        }
        function floatsCollect(defaultJson) {


            let floats_list = []



            for (let grades in defaultJson) {

                for (let floats in defaultJson[grades]) {
                    if (!(in_arry(floats, floats_list))) {
                        floats_list.push(floats)

                    }
                }
            }


            return (floats_list)



        }
        function in_arry(item, arry) {
            for (let i of arry) {
                if (item == i) { return true }
            }
            return false
        }
