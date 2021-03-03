 function SoundBoard() {
    document.addEventListener('keydown', function(e){
        let key = e.keyCode;
        const audio = document.querySelector(`audio[data-key="${key}"]`);
        const commeTuVeux = audio.nextElementSibling;
        audio.currentTime= 0;
        audio.play();
        commeTuVeux.classList.add('sound-active');
    
        audio.addEventListener('ended', function(){
            commeTuVeux.classList.remove('sound-active');
        })
    })
    
}
function SoundBoardMobile() {
    document.addEventListener('click', function(e){
        let key = e.target.getAttribute("id");
        const audio = document.querySelector(`audio[data-key="${key}"]`);
        audio.currentTime= 0;
        audio.play();
        e.target.classList.add('sound-active');
    
        audio.addEventListener('ended', function(){
            e.target.classList.remove('sound-active');
        })
    })
    
}

 export function all(){
    SoundBoard();
    SoundBoardMobile();
 }