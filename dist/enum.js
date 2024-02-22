"use strict";
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "admin";
    ROLES["SELLER"] = "seller";
    ROLES["CUSTOMER"] = "customer";
})(ROLES || (ROLES = {}));
const user01 = {
    username: 'Name',
    role: ROLES.ADMIN
};
