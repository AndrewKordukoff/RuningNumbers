
const time = 10000;


function runNum(elem, num){
    let l = document.querySelector("#" + elem);
    let velocity = time / num * 10;
    let n = 0;
    let timerId = setInterval( () => {

        if (n == num){
            clearInterval(timerId);
        }
        l.innerHTML = n;
        n = n + 10;
    }, velocity );

}

runNum("out-1", 1000);