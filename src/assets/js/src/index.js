/* ==============================
  set aria-hidden for fa
============================== */
(function(){
  let getIcons = document.querySelectorAll('i.fa');
    getIcons.forEach(function(iconEach)
    {
      let getIconAttr = iconEach.getAttribute('aria-hidden');
        if (!getIconAttr)
        {
          iconEach.setAttribute('aria-hidden','true');
        }
    });
})();


/* ==============================
  set today icon visible
============================== */
(function(){
  var getDay = document.querySelectorAll('.today');
  getDay.forEach(function(days)
  {
    var getDayToday = document.querySelectorAll('.today .today-circle');
    getDayToday.forEach(function(today)
    {
      today.style.visibility = 'visible';
    })
  })
})();
