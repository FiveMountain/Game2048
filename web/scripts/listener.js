function Listener({move: moveFn, start: startFn}) {
    window.addEventListener('keyup', function (e) {
        switch (e.keyCode) {
            // 上
            case 37:
                moveFn({row: 0, column: -1});
                break;
            // 下
            case 39:
                moveFn({row: 0, column: 1});
                break;
            // 左
            case 38:
                moveFn({row: -1, column: 0});
                break;
            // 右
            case 40:
                moveFn({row: 1, column: 0});
                break;
        }
    });

    // New Game、Try Again等按钮添加事件
    const buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            startFn();
        })
    }
}