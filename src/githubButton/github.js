(function () {

var target = document.getElementsByClassName("clone-options")[0];
if (target)
    addButton(target);


function addButton(target) {
    var link = document.createElement("a");
    link.className = "minibutton sidebar-button codebox-button";
    link.title = "Edit in Codebox";
    link.rel = "nofollow";
    link.target = "_blank";

    var isPrivate = document.getElementsByClassName("private").length > 0;
    var user = document.querySelectorAll(".author>a>span")[0].textContent;
    var repo = document.querySelectorAll(".js-current-repository")[0].textContent;
    
    if (isPrivate)
        var url = "git@github.com:" + user + "/" + repo + ".git";
    else
        var url = "https://github.com/" + user + "/" + repo + ".git";
        
    link.href = "https://www.codebox.io/api/edit/github?url=" + url;
    
    var icon = document.createElement("span");
    
    link.appendChild(icon);
    link.appendChild(document.createTextNode("Edit in Codebox"));
    
    target.parentNode.insertBefore(link, target.nextSibling);
}

})();
