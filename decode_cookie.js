"use strict"

function get_cookie() {
    // the cookie is always named "ck"
    if (document.cookie === "") {
        return {}
    }
    let splitcookie = decodeURIComponent(document.cookie).split(';');
    for (let i = 0; i < splitcookie.length; i++) {
        let chars = splitcookie[i];
        while (chars.charAt(0) === ' ') {
            chars = chars.substring(1);
        }
        if (chars.indexOf("ck=") <= 0) {
            return JSON.parse(chars.substring(3, chars.length));
        }
    }
    return {};
}