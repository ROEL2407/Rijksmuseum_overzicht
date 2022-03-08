function search() {
    //Empty results
    display.innerHTML = "";

    const input = document.getElementById("inputField");

    //search on input
    const search = data.filter(function (d) {
        return (
            d.title.toLowerCase().includes(input.value.toLowerCase()) ||
            d.principalOrFirstMaker.toLowerCase().includes(input.value.toLowerCase())
        );
    });

    //TODO: ignore capital letters & empty state

    showInfo(search);
}