const soldEl = document.getElementById("sold");
const storedEl = document.getElementById("storage");
const profitEl = document.getElementById("money");
const makebtn = document.getElementById("make");
const sellbtn = document.getElementById("sell");

let sold = 0;
let stored = 0;
let money = 0;

update()

function update()
    {

        storedEl.innerText = stored;
        profitEl.innerText = money + "$";
        soldEl.innerText = sold;
    };

makebtn.addEventListener("click", () => {

    stored = stored + 1;
    update()

});

sellbtn.addEventListener("click", () => {

    sold = sold + stored;
    money = stored * 20 + money;
    stored = stored - stored;
    update()

});