/* ==============================
  set aria-hidden for fa
============================== */
(function(){
  let getIcons = document.querySelectorAll('i.fa');
  // if(getIcons){
    getIcons.forEach(function(iconEach)
    {
      let getIconAttr = iconEach.getAttribute('aria-hidden');
        if (!getIconAttr)
        {
          iconEach.setAttribute('aria-hidden','true');
        }
    });
  // }
})();
