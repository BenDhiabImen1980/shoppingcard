
var heart=document.querySelectorAll(".heart")

Array.from (heart).map((i) =>{
    i.addEventListener('click',()=>{
    i.classList.toggle('heart-red');
    });
});

var supp =document.querySelectorAll(".supprime")

Array.from (supp).map((i) =>{
    i.addEventListener('click',()=>{
        /* si le sous-total > 0 */
        if(i.nextElementSibling.nextElementSibling.nextElementSibling.
            nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML>0){

            /*mettre à jour le total */
            i.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.innerHTML=
            parseInt(i.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.innerHTML)-
            parseInt(i.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML);
        }
        
        /*supprimer le Item*/
    i.parentElement.remove();
        
    });
});

var plus=document.querySelectorAll(".boutplus")
var moins=document.querySelectorAll(".boutmoins")

Array.from (plus).map((i) =>{
    i.addEventListener('click',()=>{
    i.nextElementSibling.innerHTML++; /*ajouter la quantité */
    /*mettre à jour le total */
    i.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.innerHTML=
    parseInt(i.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.innerHTML)+
    parseInt(i.previousElementSibling.innerHTML);
    /*mettre à jour le Sous-total */
    i.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML=
        parseInt(i.nextElementSibling.innerHTML) *parseInt(i.previousElementSibling.innerHTML);
    });

});

Array.from (moins).map((i) =>{
    i.addEventListener('click',()=>{
        if (i.previousElementSibling.innerHTML>0){
            i.previousElementSibling.innerHTML--; /*diminuer la quantité */
            /*mettre à jour le Sous-total */
            if(i.nextElementSibling.nextElementSibling.innerHTML>0){
                i.nextElementSibling.nextElementSibling.innerHTML=parseInt(i.nextElementSibling.nextElementSibling.innerHTML)-
                parseInt(i.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
            }
            /*mettre à jour le total */
            if(i.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.innerHTML>0){            
                i.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.innerHTML=
                parseInt(i.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.innerHTML)-
                parseInt(i.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
            }
        }
    });
});

