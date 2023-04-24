document.querySelector(".control-buttons span").onclick = function () {

    let yourName = prompt("Whats Your Name?");

    if (yourName == null || yourName == "") {

        document.querySelector(".name span").innerHTML = 'Unknown';

    } else {
     
        document.querySelector(".name span").innerHTML = yourName;

    }

    document.querySelector(".control-buttons").remove();
};

let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

//let orderRange = [...Array(blocks.length).keys()];

let orderRange = Array.from(Array(blocks.length).keys());

//console.log(orderRange);
shuffle(orderRange);
//console.log(orderRange);

blocks.forEach((blocks, index) => {

    block.style.order = testOrderRange[index];

    // Add Click Event
    block.addEventListener('click', function () {
    
       //Trigger the Flip Block Function
        flipBlock(block);
    });
});
//Flip Block Function
function flipBlock(selectedBlock) { 

    selectedBlock.classList.add('is-flipped');

    //Collect All Flipped Cards
   let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
 
     // If Theres Two Selected Blocks
    if (allFlippedBlocks.length === 2) { 

       // console.log('Two Flipped Blocks Selected'); 
        
        //Stop Clicking Function
        stopClicking();

        //Check Matched Block Function
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }     
}
//Stop Clicking Function
function stopClicking() { 

    blocksContainer.classList.add('no-clicking');

    setTimeout(() => {

         //Remove Class No Clicking on Main Container
        blocksContainer.classList.add('no-clicking');
        
    }, duration);
}

//Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock) { 
 
    let triesElement = document.querySelector('.tries span');

    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');

    } else { 

        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() => {

            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
            
        }, duration);

    }

}
//Shuffle Function
function shuffle(array) { 

    //Settings Vars
    let current = array.length,
        temp,
        random;
    
    while (current > 0) {
        
    // Get Randow Number
    random = Math.floor(math.random() * current);
    
    //Decrease Lenght By One
    current--;
 
    temp = array[current];

    array[current] = array[randow];

    array[random] = temp;
  }
 return array;
}
