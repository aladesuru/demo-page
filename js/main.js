/* ==========================================================================
  	Element global reference
   ========================================================================== */
  var dropDownIcon = document.getElementById("dropdown-menu-icon");
  var dropDownMenu = document.getElementById("dropdown-menu");
  var menuList = document.getElementById("menu-list");
/* ==========================================================================
  	Cross browser event handler
   ========================================================================== */

   var EventUtility = {
    addHandler : (element , eventName , handler)  =>  {
      if (element.addEventListerner) {
        element.addEventListerner(eventName , handler , false);
      } else if (element.attachEvent){
        element.attachEvent("on" + eventName , handler);
      }else{
        element["on" + eventName] = handler;
      }
    },

    getEvent : (event) => {
      return event ? event : window.event ;
    },

    getTarget : (event) => {
      return event.target || event.srcElement ;
    },

    preventDefault : (event) => {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false ;
      }
    },

   }

/* ==========================================================================
   event Handlers
   ========================================================================== */
/*
* toggle dropdown menu
*/
   const OnclickDropDownIcon = () => {
    if (dropDownMenu.style.maxHeight ==  "200px") {
       dropDownMenu.style.maxHeight = 0 + "px";
    } else {
      dropDownMenu.style.maxHeight = "200px";
    }
   };

   EventUtility.addHandler(dropDownIcon , "click" , OnclickDropDownIcon);

/*
* Extract dropdown menu item and set is value to region
*/
   const onClickDropDownList = event => {
    let region = document.getElementById("region");
     event = EventUtility.getEvent(event);
    let target = EventUtility.getTarget(event);
    let targetValue = event.target.innerHTML;
    region.value = targetValue;
    dropDownMenu.style.maxHeight = 0 + "px";
   }

EventUtility.addHandler(menuList , "click" , onClickDropDownList);
