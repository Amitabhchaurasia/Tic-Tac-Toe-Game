let num=1;
let array = [
    [7,8,9],
    [3,5, 4],
    [2, 6,10 ]
  ];
function handleButtonClick(buttonId) {
    if(num%2!=0){
        var button = document.getElementById(buttonId);
        if(buttonId=='one'){
            array[0][0]=1;
        }
        if(buttonId=='two'){
            array[0][1]=1;
        }
        if(buttonId=='three'){
            array[0][2]=1;
        }
        if(buttonId=='four'){
            array[1][0]=1;
        }
        if(buttonId=='five'){
            array[1][1]=1;
        }
        if(buttonId=='six'){
            array[1][2]=1;
        }
        if(buttonId=='seven'){
            array[2][0]=1;
        }
        if(buttonId=='eight'){
            array[2][1]=1;
        }
        if(buttonId=='nine'){
            array[2][2]=1;
        }
        button.textContent = 'X';
        button.disabled = true;
        matchCheek();
        num++;
    
    }else{
        var button = document.getElementById(buttonId);
        if(buttonId=='one'){
            array[0][0]=0;
        }
        if(buttonId=='two'){
            array[0][1]=0;
        }
        if(buttonId=='three'){
            array[0][2]=0;
        }
        if(buttonId=='four'){
            array[1][0]=0;
        }
        if(buttonId=='five'){
            array[1][1]=0;
        }
        if(buttonId=='six'){
            array[1][2]=0;
        }
        if(buttonId=='seven'){
            array[2][0]=0;
        }
        if(buttonId=='eight'){
            array[2][1]=0;
        }
        if(buttonId=='nine'){
            array[2][2]=0;
        }
        button.disabled = true;
        button.textContent = 'O';
        num++;
        matchCheek();
    }
}

function matchCheek() {
    if (
        (array[0][0] == array[0][1] && array[0][0] == array[0][2]) ||
        (array[0][0] == array[1][0] && array[0][0] == array[2][0]) ||
        (array[0][0] == array[1][1] && array[0][0] == array[2][2]) ||
        (array[0][2] == array[1][2] && array[0][2] == array[2][2]) ||
        (array[0][2] == array[1][1] && array[0][2] == array[2][0]) ||
        (array[0][1] == array[1][1] && array[0][1] == array[2][1]) ||
        (array[2][0] == array[2][1] && array[2][0] == array[2][2]) ||
        (array[1][0] == array[1][1] && array[1][0] == array[1][2])
    ) {
        if (array[0][0] == array[0][1] && array[0][0] == array[0][2]) {
            enableButtons(['one', 'two', 'three']);
            updateResetElement('one');
        } else if (array[0][0] == array[1][0] && array[0][0] == array[2][0]) {
            enableButtons(['one', 'four', 'seven']);
            updateResetElement('one');
        } else if (array[0][0] == array[1][1] && array[0][0] == array[2][2]) {
            enableButtons(['one', 'five', 'nine']);
            updateResetElement('one');
        } else if (array[0][2] == array[1][2] && array[0][2] == array[2][2]) {
            enableButtons(['three', 'six', 'nine']);
            updateResetElement('three');
        } else if (array[0][2] == array[1][1] && array[0][2] == array[2][0]) {
            enableButtons(['three', 'five', 'seven']);
            updateResetElement('three');
        } else if (array[0][1] == array[1][1] && array[0][1] == array[2][1]) {
            enableButtons(['two', 'five', 'eight']);
            updateResetElement('two');
        } else if (array[2][0] == array[2][1] && array[2][0] == array[2][2]) {
            enableButtons(['seven', 'eight', 'nine']);
            updateResetElement('seven');
        } else if (array[1][0] == array[1][1] && array[1][0] == array[1][2]) {
            enableButtons(['four', 'five', 'six']);
            updateResetElement('four');
        }
    }
}

// Helper function to enable buttons
function enableButtons(buttonIds) {
    buttonIds.forEach((id) => {
        var button = document.getElementById(id);
        button.disabled = false;
    });
}

// Helper function to update reset element
function updateResetElement(winnerId) {
    var resetElement = document.querySelector('.reset');
    var winnerelement = document.getElementById('winner');
    winnerelement.innerHTML = 'Winner is '+document.getElementById(winnerId).textContent;
    resetElement.style.left = '0';
}
