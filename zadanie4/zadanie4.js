const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');

function useRequest(value1, value2) {
    fetch(`https://picsum.photos/${value1}/${value2}`)
        .then(function (response) {
            resultNode.innerHTML = `
              <img src="${response.url}"
              alt="alt"/>
          `;
        })
}

btnNode.addEventListener('click', function () {
    const value1 = document.querySelector('input[id="inp1"]').value;
    const value2 = document.querySelector('input[id="inp2"]').value;
        if (value1 > 99 && value1 < 301 && value2 > 99 && value2 < 301) {
            useRequest(value1, value2)
            } else {
        resultNode.innerHTML = 'числа вне диапазона от 100 до 300'
    }
})