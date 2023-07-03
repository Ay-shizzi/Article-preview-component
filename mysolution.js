const share = document.getElementById('share');
const socials = document.getElementById('pop-up');
const mobileShare = document.getElementById('mobile-share');
const mobileSocials = document.getElementById('pop-up_socials');
const mobileAppleton = document.getElementById('pop-up_appleton');
const shareMobile = document.getElementById('share-mobile');

share.addEventListener('click', popUp)
mobileShare.addEventListener('click', mobilepopUp)
shareMobile.addEventListener('click', appletonpopUp)

function popUp(){
    if (socials.style.display === "flex") {
        socials.style.display = "none";
      } else {
        socials.style.display = "flex";
      }
}

function mobilepopUp(){
    mobileSocials.style.display = "flex"
    mobileAppleton.style.display = "none"
}
function appletonpopUp(){
    mobileSocials.style.display = "none"
    mobileAppleton.style.display = "flex"
}