/* ==========================================================================
  	Element reference
   ========================================================================== */

  var mainNav = document.getElementById("main-nav");
  var region = document.getElementById("region");
  var dropDownIcon = document.getElementById("dropdown-menu-icon")
  var dropDownMenu = document.getElementById("dropdown-menu");
  var dropDownList = document.getElementById("dropdown-list");

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

   const OnclickDropDownIcon = () => {
    if (dropDownMenu.style.maxHeight ==  "200px") {
       dropDownMenu.style.maxHeight = 0 + "px";
    } else {
      dropDownMenu.style.maxHeight = "200px";
    }
   };

   EventUtility.addHandler(dropDownIcon , "click" , OnclickDropDownIcon);

   const onClickDropDownList = (event) => {
     event = EventUtility.getTarget(event);
    var target = EventUtility.getTarget(event);
    console.log(dropDownList);
   }

   EventUtility.addHandler(dropDownList , "click" , onClickDropDownList);
