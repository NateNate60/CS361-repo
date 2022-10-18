"use strict"



function update_email () {
    let email = document.getElementById("email_field").value
    if (email == "") {
        alert("Email can't be empty!")
        return
    }
    if (confirm(`Are you sure you want to change your notification email to "${email}"?`)) {
        console.log(`User changed their email to ${email}`)
        alert("At this point, the email would be sent to my partner's project which does the actual timekeeping.")
        let cookie = get_cookie();
        cookie["email"] = email;
        document.cookie = `ck=${JSON.stringify(cookie)}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/;`
    }
}