//creating the 16x16 grid of divs
function defaultGrid()
{
    const mainContainer = document.querySelector('.container');
    const gridTile = document.createElement('div');
    gridTile.classList.add("etchTile");
    let clonedTile;

    for(let col = 0; col < 256; col++)
    {
        clonedTile = gridTile.cloneNode();
        mainContainer.appendChild(clonedTile);
    }
}

defaultGrid();

