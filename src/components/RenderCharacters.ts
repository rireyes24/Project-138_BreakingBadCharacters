
export const RenderCharacters = (nCharacters: number) => {
    
    let totalRender = [];
    
    for(let i = 1; i <= nCharacters; i++)
    {
        totalRender.push(`<div id="BB${i.toString()}"></div>`);
    }

    const stringRender = totalRender.toString();
    const render = stringRender.replace(/,/g, "")

    return render;
}

