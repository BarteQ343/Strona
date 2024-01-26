var order = [];
var koszyk = ['Cappuccino <br>  - Wanilia 13.37 zł <button class="btn btn-danger" onclick="removeFromCart(this)">Usuń</button>', 'Gorąca czekolada <br>  - Bita śmietana<br>  - Owoce leśne 9.11 zł <button class="btn btn-danger" onclick="removeFromCart(this)">Usuń</button>', 'Muffin 3,50 zł <button class="btn btn-danger" onclick="removeFromCart(this)">Usuń</button>'];

function showOrders() {
    const zamowieniaContent = document.getElementById('zamowieniaContent');
    var koszykTemp = [];
    var orderTemp = [];

    for (var i = 0; i < koszyk.length; i++) {
        var koszykSplit = koszyk[i].split(' zł ');
        for (var j = 0; j < 2; j++){
            if (j == 0) {
                koszykTemp.push(koszykSplit[j]);
            }
        }   
        var koszykSplit = koszykTemp[i].split(' ');
        koszykSplit.pop();
        var koszykJoin = koszykSplit.join(' ');
        orderTemp.push(koszykJoin);
        var orderJoin = orderTemp.join(' <br>');
        if (i == koszyk.length - 1) {
            order.push(orderJoin);
            koszyk = [];
            koszykTemp = [];
            orderTemp = [];
        }
    }

    if (order.length == 0) {
        zamowieniaContent.innerHTML = `
        <div class="row" style="margin-bottom: 10px;">
            <div class="col-md-2"></div>
            <div class="col-md-8 menu-text" style="background-color: #8B6642; border-radius: 20px; height: max-content; padding: 10px 12px;">
                Brak niewykonanych zamównień
            </div>
            <div class="col-md-2"></div>
        </div>`;
    } else {
        zamowieniaContent.innerHTML = ``;
        for (var i = 0; i < order.length; i++) {
            zamowieniaContent.innerHTML += `<div class="row" style="margin-bottom: 10px;">
            <div class="col-md-2"></div>
            <div class="col-md-8 menu-text" style="background-color: #8B6642; border-radius: 20px; height: max-content; padding: 10px 12px;">
                <div class="row" style="padding-right: 10px;">
                    <div class="col-md-9">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item menu-text" style="background-color: #8B6642;">Zamówienie #${i+1}<hr>${order[i]}</li>
                        </ul>
                    </div>
                    <div class="col-md3" id="Status${i}" style="max-width: 25%; background-color: #CD995C; border-radius: 20px; padding-right: 5px; text-align: center; height: 25%;">
                        Status<br />
                        W trakcie
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <button class="btn pay-btn menu-text" onclick="wTrakcie('${i}')" style="margin-bottom: 5px; font-size: 30px;">W trakcie</button>
                <button class="btn pay-btn menu-text" onclick="gotowe('${i}')"style="margin-bottom: 5px; font-size: 30px;">Gotowe do odbioru</button>
                <button class="btn pay-btn menu-text" onclick="odebrane('${i}')"style="margin-bottom: 5px; font-size: 30px;">Odebrane</button>
            </div>
        </div>`;
        };
    };
}

function wTrakcie(id) {
    var statusID = "Status".concat(id);
    var status = document.getElementById(statusID);
    status.innerHTML = `
        Status <br />
        W trakcie
    `
}

function gotowe(id) {
    var statusID = "Status".concat(id);
    var status = document.getElementById(statusID);
    status.innerHTML = `
        Status <br />
        Gotowe od odbioru
    `
}

function odebrane(id) {
    order.splice(id, 1);
    showOrders();
}