//creating custom grid size
function getCustomGrid()
{
    let sizePrompt = prompt("What size grid would you like?");
    let size = parseInt(sizePrompt);
    let clearScreen = document.querySelector('.container').innerHTML = "";

    if( size > 0)
    {
        const mainContainer = document.querySelector('.container');
        mainContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
        mainContainer.style.gridTemplateRows = `repeat(${size}, auto)`;
        const gridTile = document.createElement('div');
        gridTile.classList.add("etchTile");
        let clonedTile;

        for(let col = 0; col < (size*size); col++)
        {
            clonedTile = gridTile.cloneNode();
            mainContainer.appendChild(clonedTile);
        }
        addHoverEffect();
    }
    else
    {
        defaultGrid();
        addHoverEffect();
    }
}

//creating the 16x16 grid of divs
function defaultGrid()
{
    const mainContainer = document.querySelector('.container');
    mainContainer.style.gridTemplateColumns = `repeat(16, auto)`;
        mainContainer.style.gridTemplateRows = `repeat(16, auto)`;
    const gridTile = document.createElement('div');
    gridTile.classList.add("etchTile");
    let clonedTile;

    for(let col = 0; col < 256; col++)
    {
        clonedTile = gridTile.cloneNode();
        mainContainer.appendChild(clonedTile);
    }
}

function addHoverEffect()
{
    const gridTiles = document.querySelectorAll('.etchTile');
    gridTiles.forEach((eTile) => {
        eTile.addEventListener('mouseenter', function(e){
            e.target.style.background = 'blue'; 
        });
    });
}

defaultGrid();
addHoverEffect();
