function search() {
    //Empty results
    display.innerHTML = "";

    var input = document.getElementById("inputfield");

    //search on input
    var search = data.filter(function (d) {
        return (
            d.title.toLowerCase().includes(input.value.toLowerCase()) ||
            d.principalOrFirstMaker.toLowerCase().includes(input.value.toLowerCase())
        );
    });

    //TODO: ignore capital letters & empty state

    showInfo(search);
}