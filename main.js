window.addEventListener('load', () => {
    document.getElementById('secc').addEventListener('click', () => {
        // const BMI = parseInt(document.getElementById('weight').value) / (parseInt(document.getElementById('key').value) * parseInt(document.getElementById('key').value)); ㅠ
        const standardBody = (parseInt(document.getElementById('key').value) - 100) * 0.9;
        const BMI = (parseInt(document.getElementById('key').value) - standardBody) / standardBody * 100

        document.getElementById('BMIvalue').textContent = "당신의 비만 지수입니다: " + BMI;
        if (BMI < 18.5) {
            document.getElementById('value').textContent = "저체중";
        } else if (18.5 < BMI < 23) {
            document.getElementById('value').textContent = "정상";
        } else if (23 <= BMI < 25) {
            document.getElementById('value').textContent = "과체중";
        } else if (25 <= BMI < 27) {
            document.getElementById('value').textContent = "비만 1단계";
        } else if (27 <= BMI < 30) {
            document.getElementById('value').textContent = "비만 2단계";
        } else if (BMI > 30) {
            document.getElementById('value').textContent = "비만 3단계";
        }
        console.log(BMI)
    });
    document.getElementById('key').addEventListener('keydown', (e) => {
        if (e.keyCode == 13) {
            // const BMI = parseInt(document.getElementById('weight').value) / (parseInt(document.getElementById('key').value) * parseInt(document.getElementById('key').value));
            const standardBody = (parseInt(document.getElementById('key').value) - 100) * 0.9;
            const BMI = (parseInt(document.getElementById('key').value) - standardBody) / standardBody * 100

            document.getElementById('BMIvalue').textContent = "당신의 비만 지수입니다: " + BMI;
            if (BMI < 18.5) {
                document.getElementById('value').textContent = "저체중";
            } else if (18.5 < BMI < 23) {
                document.getElementById('value').textContent = "정상";
            } else if (23 <= BMI < 25) {
                document.getElementById('value').textContent = "과체중";
            } else if (25 <= BMI < 27) {
                document.getElementById('value').textContent = "비만 1단계";
            } else if (27 <= BMI < 30) {
                document.getElementById('value').textContent = "비만 2단계";
            } else if (BMI > 30) {
                document.getElementById('value').textContent = "비만 3단계";
            }
        }
    });
    document.getElementById('weight').addEventListener('keydown', (e) => {
        if (e.keyCode == 13) {
            // const BMI = parseInt(document.getElementById('weight').value) / (parseInt(document.getElementById('key').value) * parseInt(document.getElementById('key').value));
            const standardBody = (parseInt(document.getElementById('key').value) - 100) * 0.9;
            const BMI = (parseInt(document.getElementById('key').value) - standardBody) / standardBody * 100

            document.getElementById('BMIvalue').textContent = "당신의 비만 지수입니다: " + BMI;
            if (BMI < 18.5) {
                document.getElementById('value').textContent = "저체중";
            } else if (18.5 < BMI < 23) {
                document.getElementById('value').textContent = "정상";
            } else if (23 <= BMI < 25) {
                document.getElementById('value').textContent = "과체중";
            } else if (25 <= BMI < 27) {
                document.getElementById('value').textContent = "비만 1단계";
            } else if (27 <= BMI < 30) {
                document.getElementById('value').textContent = "비만 2단계";
            } else if (BMI > 30) {
                document.getElementById('value').textContent = "비만 3단계";
            }
        }
    });
});