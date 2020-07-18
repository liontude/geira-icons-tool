(function () {
    var icons = window.iconsOriginal;
    let iconsCount = 0;

    let parent = document.getElementById("icons");

    for (let i in icons) {
        iconsCount++;
        let item = icons[i];
        let element = "<li class='icon'><div>" +
            "<i class='geira-icons'>" + item.name + "</i>" +
            "<span class='name'>" + item.name + "</span>" +
            "<span class='unicode'>\\" + item.uni + "</span>" +
            "<span class='decimal'>" + item.dec + "</span>" +
            "<span class='tags'>" + item.tags + "</span> " +
            "</div></li>";
        parent.innerHTML += element;
    }

    document.getElementById("quantity").textContent = iconsCount.toString();

    function searcher() {
        // Declare variables
        var input, filter, ul, li, name, i, tags, txtValue, txtValue2;
        input = document.getElementById('match');
        filter = input.value.toUpperCase();
        ul = document.getElementById("icons");
        li = ul.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            name = li[i].getElementsByClassName("name")[0];
            tags = li[i].getElementsByClassName("tags")[0];

            txtValue = name.textContent || name.innerText;
            txtValue2 = tags.textContent || tags.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    let matcher = document.getElementById("match");
    matcher.addEventListener('keyup', e => {
        searcher()
    })

})();