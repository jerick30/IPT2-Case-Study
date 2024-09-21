// CHANGE BG ON HOVER
function changebg(e){
    let img = document.getElementById('body');
    img.style.transition = 'all .25s';
    img.style.background = `url('${e}')`;
    img.style.backgroundSize = 'cover';
    img.style.backgroundPosition = 'center';
    img.style.backdropFilter = 'blur(10px)';
    img.style.backgroundAttachment = 'fixed';
    img.style.cursor = 'pointer';
}

// REMOVE BG ON HOVER LEAVE
function removebg(){
    let img = document.getElementById('body');
    img.style.transition = 'all .25s';
    img.style.background = '';
    img.style.backgroundSize = 'cover';
    img.style.backgroundPosition = '';
    img.style.backdropFilter = '';
    img.style.cursor = '';
    img.style.backgroundColor = '#000000'
}