const { createDomElement, appendChildrensInParent } = helpers();

function createHeaderLeftSectionItems (parentId) {
    const locationContainer=createDomElement({
        elementTag : "DIV",
        className: 'location-item',
        id : 'locationContainer'
    });
    appendChildrensInParent(parentId ,[locationContainer]);

    const location= createDomElement({
       elementTag : "SPAN",
       className : "location-item-name",
       innerHtml : "Munnekollal"
    });

    const locationFullName = createDomElement({
        elementTag : "SPAN",
        className : 'location-item-fullname',
        innerHtml : 'XP55+4P8, Spice Garden Layo...'
    });
    const dropdownIcon = createDomElement ({
        elementTag :  "I",
        className : "bi bi-chevron-down add-icon"
    });
    appendChildrensInParent(locationContainer.id,[location,locationFullName,dropdownIcon]);
}
function createHeaderLeftSection (parentId) {
    const headerLeftSection = createDomElement({
        elementTag: "DIV",
        className: "logo-location-content",
        id: "headerLeftSection",
        innerHtml : '<svg class="_8pSp-" viewBox="0 0 559 825" height="49" width="34" fill="#fc8019"><path fill-rule="evenodd" clip-rule="evenodd" d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z" fill="url(#paint0_linear_19447_66107)"></path><defs><linearGradient id="paint0_linear_19447_66107" x1="445.629" y1="63.8626" x2="160.773" y2="537.598" gradientUnits="userSpaceOnUse"><stop stop-color="#FF993A"></stop><stop offset="1" stop-color="#F15700"></stop></linearGradient></defs></svg>'
    });
    appendChildrensInParent(parentId,[headerLeftSection]);
    createHeaderLeftSectionItems(headerLeftSection.id);
}

function createHeaderMenuItem ({
    svg, displayText
}) {
    const menuItem = createDomElement({
        elementTag: "LI",
        innerHtml: svg,
        className: 'icon-content-items'
    });
    const menuItemText = createDomElement({
        elementTag: "SPAN",
        innerHtml: displayText,
        className: "icon-content-text"
    });
    menuItem.appendChild(menuItemText);
    return menuItem;
}

function createHeaderMenuItems(parentId) {
    const headerMenuList = createDomElement({
        elementTag: "UL",
        className: 'icon-content',
        id: "menuList",
    });
    appendChildrensInParent(parentId, [headerMenuList]);
    const search = createHeaderMenuItem({
        svg: '<svg class="icon-content-items-icon" viewBox="5 -1 12 25" height="17" width="17" fill="#686b78"><path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path></svg>',
        displayText: 'Search',
    });
    const offers = createHeaderMenuItem({
        svg:'<svg class="icon-content-items-icon" viewBox="0 0 32 32" height="19" width="19" fill="#686b78"><path d="M14.2 2.864l-1.899 1.38c-0.612 0.447-1.35 0.687-2.11 0.687h-2.352c-0.386 0-0.727 0.248-0.845 0.613l-0.728 2.238c-0.235 0.721-0.691 1.348-1.302 1.79l-1.905 1.385c-0.311 0.226-0.442 0.626-0.323 0.991l0.728 2.241c0.232 0.719 0.232 1.492-0.001 2.211l-0.727 2.237c-0.119 0.366 0.011 0.767 0.323 0.994l1.906 1.384c0.61 0.445 1.064 1.070 1.3 1.79l0.728 2.24c0.118 0.365 0.459 0.613 0.844 0.613h2.352c0.759 0 1.497 0.24 2.107 0.685l1.9 1.381c0.313 0.227 0.736 0.227 1.048 0.001l1.9-1.38c0.613-0.447 1.349-0.687 2.11-0.687h2.352c0.384 0 0.726-0.248 0.845-0.615l0.727-2.235c0.233-0.719 0.688-1.346 1.302-1.794l1.904-1.383c0.311-0.226 0.442-0.627 0.323-0.993l-0.728-2.239c-0.232-0.718-0.232-1.49 0.001-2.213l0.727-2.238c0.119-0.364-0.012-0.765-0.324-0.992l-1.901-1.383c-0.614-0.445-1.070-1.074-1.302-1.793l-0.727-2.236c-0.119-0.366-0.461-0.614-0.845-0.614h-2.352c-0.76 0-1.497-0.239-2.107-0.685l-1.903-1.382c-0.313-0.227-0.736-0.226-1.047-0.001zM16.829 0.683l1.907 1.385c0.151 0.11 0.331 0.168 0.521 0.168h2.352c1.551 0 2.927 1 3.408 2.475l0.728 2.241c0.057 0.177 0.169 0.332 0.321 0.442l1.902 1.383c1.258 0.912 1.784 2.531 1.304 4.006l-0.726 2.234c-0.058 0.182-0.058 0.375-0.001 0.552l0.727 2.237c0.48 1.477-0.046 3.096-1.303 4.007l-1.9 1.38c-0.153 0.112-0.266 0.268-0.324 0.447l-0.727 2.237c-0.48 1.477-1.856 2.477-3.408 2.477h-2.352c-0.19 0-0.37 0.058-0.523 0.17l-1.904 1.383c-1.256 0.911-2.956 0.911-4.213-0.001l-1.903-1.384c-0.15-0.11-0.332-0.168-0.521-0.168h-2.352c-1.554 0-2.931-1.001-3.408-2.477l-0.726-2.234c-0.059-0.18-0.173-0.338-0.324-0.448l-1.902-1.381c-1.258-0.912-1.784-2.53-1.304-4.008l0.727-2.235c0.058-0.179 0.058-0.373 0.001-0.551l-0.727-2.236c-0.481-1.476 0.046-3.095 1.302-4.006l1.905-1.385c0.151-0.11 0.264-0.265 0.323-0.444l0.727-2.235c0.478-1.476 1.855-2.477 3.408-2.477h2.352c0.189 0 0.371-0.059 0.523-0.17l1.902-1.383c1.256-0.911 2.956-0.911 4.212 0zM18.967 23.002c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM18.967 20.307c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM10.545 14.549c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM10.545 11.855c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM17.78 7.882l2.331 1.352-7.591 13.090-2.331-1.352 7.591-13.090z"></path></svg>',
        displayText: 'Offer',
    });
    const help = createHeaderMenuItem({
        svg: '<svg class="icon-content-items-icon" viewBox="6 -1 12 25" height="19" width="19" fill="#686b78"><path d="M21.966903,13.2244898 C22.0156989,12.8231523 22.0408163,12.4145094 22.0408163,12 C22.0408163,11.8357822 22.036874,11.6724851 22.029079,11.5101984 L17.8574333,11.5102041 C17.8707569,11.6717062 17.877551,11.8350597 17.877551,12 C17.877551,12.4199029 17.8335181,12.8295214 17.749818,13.2244898 L21.966903,13.2244898 Z M21.5255943,15.1836735 L16.9414724,15.1836735 C15.8950289,16.8045422 14.0728218,17.877551 12,17.877551 C9.92717823,17.877551 8.1049711,16.8045422 7.05852762,15.1836735 L2.47440565,15.1836735 C3.80564362,19.168549 7.56739481,22.0408163 12,22.0408163 C16.4326052,22.0408163 20.1943564,19.168549 21.5255943,15.1836735 Z M21.7400381,9.55102041 C20.6468384,5.18931674 16.7006382,1.95918367 12,1.95918367 C7.2993618,1.95918367 3.3531616,5.18931674 2.25996187,9.55102041 L6.6553883,9.55102041 C7.58404845,7.5276442 9.62792376,6.12244898 12,6.12244898 C14.3720762,6.12244898 16.4159515,7.5276442 17.3446117,9.55102041 L21.7400381,9.55102041 Z M2.03309705,13.2244898 L6.25018203,13.2244898 C6.16648186,12.8295214 6.12244898,12.4199029 6.12244898,12 C6.12244898,11.8350597 6.1292431,11.6717062 6.14256675,11.5102041 L1.97092075,11.5102041 C1.96312595,11.6724851 1.95918367,11.8357822 1.95918367,12 C1.95918367,12.4145094 1.98430112,12.8231523 2.03309705,13.2244898 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,15.9183673 C14.1640545,15.9183673 15.9183673,14.1640545 15.9183673,12 C15.9183673,9.83594547 14.1640545,8.08163265 12,8.08163265 C9.83594547,8.08163265 8.08163265,9.83594547 8.08163265,12 C8.08163265,14.1640545 9.83594547,15.9183673 12,15.9183673 Z"></path></svg>',
        displayText: 'Help',
    });
    const signIn = createHeaderMenuItem({
        svg: '<svg class="icon-content-items-icon" viewBox="6 0 12 24" height="19" width="18" fill="#686b78"><path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"></path></svg>',
        displayText: 'Sign In',
    });
    const cart = createHeaderMenuItem({
        svg: '<svg xmlns="http://www.w3.org/2000/svg" class="icon-content-items-icon" viewBox="-1 0 37 32" height="20" width="20" fill="#686b78"><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"/></svg>',
        displayText: 'Cart',
    });
    appendChildrensInParent(headerMenuList.id,[search, offers, help, signIn, cart]);
}

function createHeaderRightSection(parentId) {
    const headerRightSection = createDomElement({
        elementTag: "DIV",
        id: "headerRightSection",
    });
    appendChildrensInParent(parentId, [headerRightSection]);
    createHeaderMenuItems(headerRightSection.id);
}

function createHeaderSection () {
    const section = createDomElement({
        elementTag: "SECTION",
        className: "top-banner",
        id: "headerContainer",
    });
    document.body.appendChild(section);
    createHeaderLeftSection(section.id);
    createHeaderRightSection(section.id);
}

createHeaderSection();
function createBreadCrumbsItem({
    displayText
}) {
    const elemet=createDomElement({
    elementTag: "LI",
    className: "link-nav-items-content",
    innerHtml: displayText
    })
    return elemet;
}
function createBreadCrumbsItems(parentId) {
    const navList = createDomElement({
        elementTag: "UL",
        className: 'link-nav-items',
        id: "navListItems",
    });
    appendChildrensInParent(parentId,[navList]);

    const home=createBreadCrumbsItem({
        displayText: "Home /"
    });
    const city=createBreadCrumbsItem({
        displayText: "Banglore /"
    });
    const location=createBreadCrumbsItem({
        displayText: "Brookfield /"
    });
    const resturantName=createBreadCrumbsItem({
        displayText: "Meghna Food"
    });
    appendChildrensInParent(navList.id,[home,city,location,resturantName]);
}

function createBreadCrumbs() {
    const section = createDomElement({
        elementTag: "SECTION",
        className: "link-nav",
        id: "breadCrumbsContainer",
    });
    document.body.appendChild(section);
    createBreadCrumbsItems(section.id);    
}
createBreadCrumbs();

function ratingTimimgCostContainerItem({
    parentClass, childClass, parentText, childText
}) {
    const parentElement=createDomElement({
        elementTag: "DIV",
        className:parentClass,
        innerHtml:parentText
    });
    const childElement=createDomElement({
        elementTag:"DIV",
        className:childClass,
        innerHtml:childText
    });
    parentElement.appendChild(childElement);
    return parentElement;
}

function ratingTimimgCostContainerItems(parentId) {
    
    const rating=ratingTimimgCostContainerItem({
        parentClass:"rating new-font-again",
        childClass:"rating-500 new-font",
        parentText:'<i class="bi bi-star-fill icon-modify"></i> 4.1',
        childText:"500+ rating"
    });
    const time=ratingTimimgCostContainerItem({
        parentClass:"time new-font-again",
        childClass:"delivery new-font",
        parentText:'19 mins',
        childText:"Delivery Time"

    });
    const cost=ratingTimimgCostContainerItem({
        parentClass:"price new-font-again",
        childClass:"cost new-font",
        parentText:'<i class="bi bi-currency-rupee icon-modify"></i> 600',
        childText:"Cost for Two"
    });
    appendChildrensInParent(parentId,[rating,time,cost]);
}

function contentItem({
    classId, displayText
}) {
    const elemenet = createDomElement({
        elementTag: "DIV",
        className: classId,
        innerHtml: displayText
    });
    return elemenet;
}
function contentItems(parentId) {
    const resturantName=contentItem({
      classId:"resturant-description-content-items-header",
      displayText:"Auntie Fung's"
    });
    const retsturantType=contentItem({
        classId:"resturant-description-content-items-header-style",
        displayText:"Thai, Chinese"
    });
    const resturantLocation=contentItem({
        classId:"resturant-description-content-items-header-style",
        displayText:'Munnekollal, Marathahalli | <b>Change Outlet<i class="bi bi-chevron-down bi-chevron-down-mod"></i></b>'
    });
    const ratingTimingCostContainer=createDomElement({
        elementTag:"DIV",
        className: "resturant-description-content-items-container",
        id:"rtcContainer"
    });
    appendChildrensInParent(parentId,[resturantName,retsturantType,resturantLocation,ratingTimingCostContainer]);
    ratingTimimgCostContainerItems(ratingTimingCostContainer.id);
}

function createResturantBannerleftSection(parentId) {
    const bannerLeftContainer= createDomElement({
        elementTag: "DIV",
        className: "resturant-description-items",
        id : "resturantLeftContainer"
    }); 
    appendChildrensInParent(parentId,[bannerLeftContainer]);
    
    const logoItem= createDomElement({
        elementTag : "div",
        className: "logo-resturant-items",
        innerHtml: '<img class="_2tuBw _12_oN _3sCWI" width="254" height="165" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ikmqsf8l9scdlnhahftx">'
    });
    const contentContainer= createDomElement({
        elementTag:"DIV",
        className:"resturant-description-content-items", 
        id:"resturantDetails"
    });
    appendChildrensInParent(bannerLeftContainer.id,[logoItem,contentContainer]);
    contentItems(contentContainer.id);

}
function offerOneItem(parentId) {
     const icon=createDomElement({
        elementTag: "DIV",
        className: "icon-resturant-offer-items",
        innerHtml: '<svg class="_1GTCc" viewBox="0 0 32 32" height="24" width="24" fill="#686b78"><path d="M14.2 2.864l-1.899 1.38c-0.612 0.447-1.35 0.687-2.11 0.687h-2.352c-0.386 0-0.727 0.248-0.845 0.613l-0.728 2.238c-0.235 0.721-0.691 1.348-1.302 1.79l-1.905 1.385c-0.311 0.226-0.442 0.626-0.323 0.991l0.728 2.241c0.232 0.719 0.232 1.492-0.001 2.211l-0.727 2.237c-0.119 0.366 0.011 0.767 0.323 0.994l1.906 1.384c0.61 0.445 1.064 1.070 1.3 1.79l0.728 2.24c0.118 0.365 0.459 0.613 0.844 0.613h2.352c0.759 0 1.497 0.24 2.107 0.685l1.9 1.381c0.313 0.227 0.736 0.227 1.048 0.001l1.9-1.38c0.613-0.447 1.349-0.687 2.11-0.687h2.352c0.384 0 0.726-0.248 0.845-0.615l0.727-2.235c0.233-0.719 0.688-1.346 1.302-1.794l1.904-1.383c0.311-0.226 0.442-0.627 0.323-0.993l-0.728-2.239c-0.232-0.718-0.232-1.49 0.001-2.213l0.727-2.238c0.119-0.364-0.012-0.765-0.324-0.992l-1.901-1.383c-0.614-0.445-1.070-1.074-1.302-1.793l-0.727-2.236c-0.119-0.366-0.461-0.614-0.845-0.614h-2.352c-0.76 0-1.497-0.239-2.107-0.685l-1.903-1.382c-0.313-0.227-0.736-0.226-1.047-0.001zM16.829 0.683l1.907 1.385c0.151 0.11 0.331 0.168 0.521 0.168h2.352c1.551 0 2.927 1 3.408 2.475l0.728 2.241c0.057 0.177 0.169 0.332 0.321 0.442l1.902 1.383c1.258 0.912 1.784 2.531 1.304 4.006l-0.726 2.234c-0.058 0.182-0.058 0.375-0.001 0.552l0.727 2.237c0.48 1.477-0.046 3.096-1.303 4.007l-1.9 1.38c-0.153 0.112-0.266 0.268-0.324 0.447l-0.727 2.237c-0.48 1.477-1.856 2.477-3.408 2.477h-2.352c-0.19 0-0.37 0.058-0.523 0.17l-1.904 1.383c-1.256 0.911-2.956 0.911-4.213-0.001l-1.903-1.384c-0.15-0.11-0.332-0.168-0.521-0.168h-2.352c-1.554 0-2.931-1.001-3.408-2.477l-0.726-2.234c-0.059-0.18-0.173-0.338-0.324-0.448l-1.902-1.381c-1.258-0.912-1.784-2.53-1.304-4.008l0.727-2.235c0.058-0.179 0.058-0.373 0.001-0.551l-0.727-2.236c-0.481-1.476 0.046-3.095 1.302-4.006l1.905-1.385c0.151-0.11 0.264-0.265 0.323-0.444l0.727-2.235c0.478-1.476 1.855-2.477 3.408-2.477h2.352c0.189 0 0.371-0.059 0.523-0.17l1.902-1.383c1.256-0.911 2.956-0.911 4.212 0zM18.967 23.002c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM18.967 20.307c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM10.545 14.549c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM10.545 11.855c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM17.78 7.882l2.331 1.352-7.591 13.090-2.331-1.352 7.591-13.090z"></path></svg>'
     });
     const content=createDomElement({
        elementTag:"DIV",
        className: 'icon-content-resturant-offer-items',
        innerHtml:"50% off up to ₹100 | Use code <br> WELCOME50"
     });
     appendChildrensInParent(parentId,[icon,content]);
}
function offerTwoItem(parentId) {
    const icon=createDomElement({
        elementTag: "DIV",
        className: "icon-resturant-offer-items",
        innerHtml: '<svg class="_1GTCc" viewBox="0 0 32 32" height="24" width="24" fill="#686b78"><path d="M14.2 2.864l-1.899 1.38c-0.612 0.447-1.35 0.687-2.11 0.687h-2.352c-0.386 0-0.727 0.248-0.845 0.613l-0.728 2.238c-0.235 0.721-0.691 1.348-1.302 1.79l-1.905 1.385c-0.311 0.226-0.442 0.626-0.323 0.991l0.728 2.241c0.232 0.719 0.232 1.492-0.001 2.211l-0.727 2.237c-0.119 0.366 0.011 0.767 0.323 0.994l1.906 1.384c0.61 0.445 1.064 1.070 1.3 1.79l0.728 2.24c0.118 0.365 0.459 0.613 0.844 0.613h2.352c0.759 0 1.497 0.24 2.107 0.685l1.9 1.381c0.313 0.227 0.736 0.227 1.048 0.001l1.9-1.38c0.613-0.447 1.349-0.687 2.11-0.687h2.352c0.384 0 0.726-0.248 0.845-0.615l0.727-2.235c0.233-0.719 0.688-1.346 1.302-1.794l1.904-1.383c0.311-0.226 0.442-0.627 0.323-0.993l-0.728-2.239c-0.232-0.718-0.232-1.49 0.001-2.213l0.727-2.238c0.119-0.364-0.012-0.765-0.324-0.992l-1.901-1.383c-0.614-0.445-1.070-1.074-1.302-1.793l-0.727-2.236c-0.119-0.366-0.461-0.614-0.845-0.614h-2.352c-0.76 0-1.497-0.239-2.107-0.685l-1.903-1.382c-0.313-0.227-0.736-0.226-1.047-0.001zM16.829 0.683l1.907 1.385c0.151 0.11 0.331 0.168 0.521 0.168h2.352c1.551 0 2.927 1 3.408 2.475l0.728 2.241c0.057 0.177 0.169 0.332 0.321 0.442l1.902 1.383c1.258 0.912 1.784 2.531 1.304 4.006l-0.726 2.234c-0.058 0.182-0.058 0.375-0.001 0.552l0.727 2.237c0.48 1.477-0.046 3.096-1.303 4.007l-1.9 1.38c-0.153 0.112-0.266 0.268-0.324 0.447l-0.727 2.237c-0.48 1.477-1.856 2.477-3.408 2.477h-2.352c-0.19 0-0.37 0.058-0.523 0.17l-1.904 1.383c-1.256 0.911-2.956 0.911-4.213-0.001l-1.903-1.384c-0.15-0.11-0.332-0.168-0.521-0.168h-2.352c-1.554 0-2.931-1.001-3.408-2.477l-0.726-2.234c-0.059-0.18-0.173-0.338-0.324-0.448l-1.902-1.381c-1.258-0.912-1.784-2.53-1.304-4.008l0.727-2.235c0.058-0.179 0.058-0.373 0.001-0.551l-0.727-2.236c-0.481-1.476 0.046-3.095 1.302-4.006l1.905-1.385c0.151-0.11 0.264-0.265 0.323-0.444l0.727-2.235c0.478-1.476 1.855-2.477 3.408-2.477h2.352c0.189 0 0.371-0.059 0.523-0.17l1.902-1.383c1.256-0.911 2.956-0.911 4.212 0zM18.967 23.002c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM18.967 20.307c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM10.545 14.549c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM10.545 11.855c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM17.78 7.882l2.331 1.352-7.591 13.090-2.331-1.352 7.591-13.090z"></path></svg>'
     });
     const content=createDomElement({
        elementTag:"DIV",
        className: 'icon-content-resturant-offer-items',
        innerHtml:"FLAT125 off | Use FLATDEAL"
     });
     appendChildrensInParent(parentId,[icon,content]);
}
function createBannerightSectionItems(parentId) {
   const offerOne=createDomElement({
        elementTag:"DIV",
        className:"content-resturant-offer-items",
        id:"offerElementOne"
   });
   appendChildrensInParent(parentId,[offerOne]);
   offerOneItem(offerOne.id);
   const offerTwo=createDomElement({
        elementTag:"DIV",
        className:"content-resturant-offer-items",
        id:"offerElementTwo"
   });
   appendChildrensInParent(parentId,[offerTwo]);
   offerTwoItem(offerTwo.id);
    const offer=createDomElement({
        elementTag:"DIV",
        className:"offer",
        innerHtml:"OFFER"
    });
    appendChildrensInParent(parentId,[offer]);

}
function createBannerightSection(parentId) {
    const offerContainer=createDomElement({
        elementTag:"DIV",
        className:"resturant-offer-items",
        id:"offerContainer"
    });
    appendChildrensInParent(parentId,[offerContainer]);
    createBannerightSectionItems(offerContainer.id);
}

function createBannerTabsSectionItem(parentId) {
    const search=createDomElement({
        elementTag:"DIV",
        className:"resturant-search-text",
        innerHtml:'<i class="bi bi-search icon-modify"></i> Search for dishes...'
    });
    const filter=createDomElement({
        elementTag:"DIV",
        className:"resturant-checkbox-text",
        innerHtml:'<i class="bi bi-square icon-modify"></i> Veg only'
    });
    const favourite=createDomElement({
        elementTag:"DIV",
        className:"resturant-favourite-text",
        innerHtml:'<i class="bi bi-suit-heart icon-modify"></i>Favourite'
    });
    appendChildrensInParent(parentId,[search,filter,favourite]);
}

function createBannerTabsSection(parentId){
    const tabSection=createDomElement({
        elementTag:"DIV",
        className:"resturant-tabs",
        id:"resturantBannerTabContainer"
    });
    appendChildrensInParent(parentId,[tabSection]);
    createBannerTabsSectionItem(tabSection.id);
}

function createResturantBanner(){
    const section = createDomElement({
        elementTag: "SECTION",
        className: "resturant",
        id: "aboutResturant",
    });
    document.body.appendChild(section);
    createResturantBannerleftSection(section.id);
    createBannerightSection(section.id);
    createBannerTabsSection(section.id);
}

createResturantBanner();

function createSideNavListSectionListItem({
    innerHtml, className, id
}){
    const item=createDomElement({
        elementTag:"LI",
        innerHtml:innerHtml,
        className:className,
        id:id
    });
    // console.log(item);
    return item;
}
function createSideNavListSectionList(parentId) {
    const list=createDomElement({
        elementTag:"UL",
        className:"side-nav-bar-items",
        id:"navItems"
    });
    appendChildrensInParent(parentId,[list]);

    const item=[{innerHtml:"Recommended", className:"side-nav-bar-items-style"},
                {innerHtml:"Dimsums & Baos"},
                {innerHtml:"Appetizers"},
                {innerHtml:"Signature Bowls"},
                {innerHtml:"Rice & Noodles"},
                {innerHtml:"Make Your Own Bowl"},
                {innerHtml:"Steamy Soups"},
                {innerHtml:"Work-tossed Gravies"}
    ];        
    const listItem = item.map(createSideNavListSectionListItem);
    appendChildrensInParent(list.id,listItem);
}
function createSideNavListSection(parentId) {
    const sidenav=createDomElement({
        elementTag:"DIV",
        className:"side-nav-bar",
        id: "navContainer"
    });
    appendChildrensInParent(parentId,[sidenav]);
    createSideNavListSectionList(sidenav.id);
}
function createDishCradAddBtn(){
    const btn=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-img-btn",
        innerHtml:"ADD",
    });
    const plus=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-img-btn-plus-icon"
    });
    btn.appendChild(plus);
    return btn;
}

function createDishCradleft(icon, dishName, price, description,individualId){
    const left=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-dish",
        id:"leftCenterBodyCard"
    });
    appendChildrensInParent(individualId,[left]);

    const dishType=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-dish-icon",
        innerHtml:icon
    });
    const dish=createDomElement({
        elementTag:"DIV",
        className:"center-body-dish-name",
        innerHtml:dishName
    });
    const dishPrice=createDomElement({
        elementTag:"DIV",
        className:"center-body-dish-price",
        innerHtml:price
    });
    const dishDesciption=createDomElement({
        elementTag:"DIV",
        className:"center-body-dish-description",
        innerHtml:description
    });
    appendChildrensInParent(left.id,[dishType, dish, dishPrice, dishDesciption]);
    return left;
}

function createDishCradRight(image,individualId){
    const right=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-img",
        id:"rightCenterBodyCard"
    });
    appendChildrensInParent(individualId,[right]);

    const dishImage=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-img-item",
        innerHtml:image
    });

    const addBtn=createDishCradAddBtn();

    const display=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-img-btn-below-content",
        innerHtml:"customisable"
    });
    appendChildrensInParent(right.id,[dishImage,addBtn,display]);
    return right
}

function createDishCrad(
    {icon, dishName, price, description, image, individualId, parentId}
) {
    const container=createDomElement({
        elementTag:"DIV",
        className:"center-body-card",
        id:individualId
    });
    appendChildrensInParent(parentId, [container]);

    const leftDishCard=createDishCradleft(icon, dishName, price, description,individualId);
    const righttDishCard=createDishCradRight(image,individualId);

    appendChildrensInParent(individualId,[leftDishCard,righttDishCard]);
    return container;

}
function createResturantDishesCard(parentId) {
    const arr=[{
      icon:'<img class="center-body-card-dish-icon-modify" src="/assets/img1.png">',
      dishName:"Veg Crystal Dimsums",
      price:'<i class="bi bi-currency-rupee "></i>269',
      description:"Needs no introduction- bite size steamed dumplings stuffed with <br> corn, spinach & other vegetables in Asian flavours and served with <br> auntie's in-house XO sauce",
      image:'<img alt="Veg Crystal Dimsums" class="styles_itemImage__3CsDL" loading="lazy" width="150" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qcjx4eiwq8wfbvd8a8v8">',
      individualId:"cardNo1",
      parentId:parentId
    },
    {
      icon:'<img class="center-body-card-dish-icon-modify" src="/assets/img1.png">',
      dishName:"Chicken Crystal Dimsums",
      price:'<i class="bi bi-currency-rupee icon-modify"></i>269',
      description:"|Serves 1-2|Needs no introduction- bite size steamed dumplings <br> stuffed with chicken & cilantro with Asian flavours and served with <br> auntie's in-house xo sauce.",
      image:'<img alt="Chicken Crystal Dimsums" class="styles_itemImage__3CsDL" loading="lazy" width="256" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nrkybvr5qpjplej2zjln">',
      individualId:"cardNo2",
      parentId:parentId
    }];
    arr.map(createDishCrad);

}
function createResturantFoodItemsSectionItems(parentId) {
    const header=createDomElement({
        elementTag:"DIV",
        className:"center-body-header",
        innerHtml:"Recommended"
    });
    const noOfItems=createDomElement({
        elementTag:"DIV",
        className:"center-body-num-of-items",
        innerHtml:"39 ITEMS"
    });
    const cardsSection=createDomElement({
        elementTag:"DIV",
        className:"center-body-card-items",
        id:"cardContainer"
    });
    appendChildrensInParent(parentId,[header,noOfItems,cardsSection]);
    createResturantDishesCard(cardsSection.id);
}

function createResturantFoodItemsSection(parentId) {
    const centerBody=createDomElement({
        elementTag :"DIV",
        className:"center-body",
        id:"centerBody"
    });
    appendChildrensInParent(parentId,[centerBody]);
    createResturantFoodItemsSectionItems(centerBody.id);

}

function createAsideSectionItems(parentId) {
    const header=createDomElement({
        elementTag:"DIV",
        className:"aside-top-content",
        innerHtml:"<strong>Cart Empty</strong>"
    });
    const cartImage=createDomElement({
        elementTag:"DIV",
        className:"aside-log-content",
        innerHtml:'<img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" class="aside-logo-modify ">'
    });
    const content=createDomElement({
        elementTag:"DIV",
        className:"aside-bottom-content",
        innerHtml:"Good food is always cooking! <br> Go ahead, order some yummy items from the menu."
    });
    appendChildrensInParent(parentId,[header,cartImage,content]);
}

function createAsideSection(parentId) {
    const aside= createDomElement({
        elementTag:"DIV",
        className:"aside",
        id:"aisdeItem"
    });
    appendChildrensInParent(parentId,[aside]);
    createAsideSectionItems(aside.id);
}

function createBody(){
    const section = createDomElement({
        elementTag: "SECTION",
        className: "body",
        id: "bodyItem",
    });
    document.body.appendChild(section);
    createSideNavListSection(section.id);
    createResturantFoodItemsSection(section.id);
    createAsideSection(section.id);
}
createBody();