// SKINS PAGE ONLY
const uuidList = {
    max: "11e9093ec7f141cd945bfee11e335ec3",
    melvin: "cfec9fdb8d6a4e24bb03498d22a12f84",
    william: "3af2a7b06a8848ad9788ee6129f7a3cd",
    alma: "a5937b8079e54150a5047f6c91bbfbb9",
    axel: "47b7ef68ba304be0a647ebc939d9b067",
    johannes: "1cf2e56473a945549705418804e25b7d",
    rufus: "35cfcc0781b846aeadfdc40b0447e4f5",
    maxalt: "25888ac1b0934cf18e31643d83604d20",
};

window.onload = () => {
    for (const id in uuidList) {
        const uuid = uuidList[id];
        const skin = document.getElementById(`${id}-skin`);
        if (skin) {
            skin.src = `https://minotar.net/armor/body/${uuid}`;
        }
    }
};
