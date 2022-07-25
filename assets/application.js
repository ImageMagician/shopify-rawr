// 
window.onload = function() {
  getCookieFooter('discount_code');
  
  // Tab buttons links
  const reviewClick = document.getElementById('reviewClick');
  const videoClick  = document.getElementById('videoLink');
  
  if ( reviewClick != undefined ) {
    reviewClick.Tab = 'REVIEWS';
	reviewClick.addEventListener('click', tabFunction, false);
  }
  if ( videoClick != undefined ) {
    videoClick.Tab = 'HIGHLIGHTS';
	videoClick.addEventListener('click', tabFunction, false);
  }
}


// USED WITH TAB BUTTON CLICKS
function tabFunction (e) {
  // Get all tab links
  const tabList = document.querySelectorAll('.shogun-tab-title');
  const tab = this.Tab;
  let i = 0;
  
  // If there are tabs on the page
  // Find the tab with the text of of the Tab attribute set above on the item and click it.
  if ( tabList.length > 0 ) {
    for ( i=0; i<tabList.length; i++ ) {
      let trim = tabList[i].innerHTML.trim();
      if ( trim == tab ) {
        const parentTab = tabList[i].parentElement.parentElement;
        parentTab.click();
      }
    }
  }
}

function getCookieFooter(cname) {
  // Discount Code Bar
  const uri = window.location.href;
  const urlParams = new URLSearchParams(uri);
  let dc = '';
  let dc_price = '';
  let dc_comma = '';
  
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      dc = c.substring(name.length, c.length);
    }
  }
  if ( dc !== null && dc !== '' ) {
    const d_bar = document.getElementById('discount_bar');
    const d_code = document.getElementById('dc_code');
    
    if (d_bar !== null) {
//      d_bar.classList.add('show');
    }
    if (d_code !== null ) {
//      d_code.innerHTML = dc;
    }
  }
  
  console.log('dc = ' + dc);

}