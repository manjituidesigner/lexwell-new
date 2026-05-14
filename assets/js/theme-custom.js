/* theme-custom.js - Custom Theme Scripts */

document.addEventListener('DOMContentLoaded', function(){
  // --- Nav Carets Logic ---
  try{
    document.querySelectorAll('.nav-links').forEach(function(a){
      // if we've already added our caret, skip
      if(a.querySelector('.nav-caret')) return;

      // remove theme-specific inline icons (classes starting with tji- or tj-)
      Array.from(a.querySelectorAll('i')).forEach(function(el){
        var cls = el.className || '';
        if(/\btji-|\btj-|\btj\w*/.test(cls)) el.remove();
      });

      // append new caret (FontAwesome fallback to Bootstrap icon) only if missing
      if(!a.querySelector('.nav-caret')){
        var icon = document.createElement('i');
        if(document.querySelector('link[href*="bootstrap-icons"]')){
          icon.className = 'bi bi-chevron-down nav-caret';
        } else {
          icon.className = 'fa-solid fa-chevron-down nav-caret';
        }
        a.appendChild(icon);
      }
    });
    console.log('Nav carets updated');
  }catch(e){ console.warn('Failed to update nav carets', e); }

  // --- Icon Replacement Logic ---
  try{
    const iconMap = {
      'tji-check': 'fa-solid fa-check',
      'tji-angle-right': 'fa-solid fa-angle-right',
      'tji-arrow-right': 'fa-solid fa-arrow-right',
      'tji-arrow-left': 'fa-solid fa-arrow-left',
      'tji-arrow-up': 'fa-solid fa-arrow-up',
      'tji-clock': 'fa-regular fa-clock',
      'tji-email': 'fa-regular fa-envelope',
      'tji-phone': 'fa-solid fa-phone',
      'tji-play': 'fa-solid fa-play'
    };
    
    document.querySelectorAll('i').forEach(function(el){
      let changed = false;
      let newClasses = [];
      el.classList.forEach(cls => {
        if (iconMap[cls]) {
           newClasses.push(...iconMap[cls].split(' '));
           changed = true;
        } else if (!cls.startsWith('tji-')) {
           newClasses.push(cls);
        } else {
           changed = true; // remove unknown tji-
        }
      });
      
      if (changed) {
         el.className = newClasses.join(' ');
      }
    });
    console.log('Custom icons replaced with FontAwesome!');
  }catch(e){ console.warn('Failed to replace custom icons', e); }
});
