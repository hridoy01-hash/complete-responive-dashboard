(async function () {

    function activeMenuItem() {

        const menuListItems = document.querySelectorAll(".s0101_sidebar_menu_list_item ");
        for (let i = 0; i < menuListItems.length; i++) {
            const singleMenuItem = menuListItems[i];

            singleMenuItem.addEventListener("click", function () {
                removeActiveMenu();
                singleMenuItem.classList.add("active_sidebar_menu_icon");
            });
        };
    };
    activeMenuItem();

    function removeActiveMenu() {
        const menuListItems = document.querySelectorAll(".s0101_sidebar_menu_list_item ");

        for (let i = 0; i < menuListItems.length; i++) {
            const singleMenuItem = menuListItems[i];
            singleMenuItem.classList.contains("active_sidebar_menu_icon") && singleMenuItem.classList.remove("active_sidebar_menu_icon");
        };
    };


    function mobileDeviceMenuItem() {
        const MobilemenuListItems = document.querySelectorAll(".s0101_footer_menu_item ");
        for (let i = 0; i < MobilemenuListItems.length; i++) {
            const MobilemenuListItem = MobilemenuListItems[i];
            MobilemenuListItem.addEventListener("click", function () {
                removeMobileActiveMenu();
                MobilemenuListItem.classList.add("s0101_active_menu_icon");
            });
        };
    }
    mobileDeviceMenuItem();

    function removeMobileActiveMenu() {
        const MobilemenuListItems = document.querySelectorAll(".s0101_footer_menu_item ");
        for (let i = 0; i < MobilemenuListItems.length; i++) {
            const element = MobilemenuListItems[i];
            element.classList.contains("s0101_active_menu_icon") && element.classList.remove("s0101_active_menu_icon");
        };
    };


})();