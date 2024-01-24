const buttonKawa = document.getElementById('buttonKawa');
const buttonDoKawy = document.getElementById('buttonDoKawy');
const buttonKoszyk = document.getElementById('buttonKoszyk');
const div = document.getElementById('menuContent');

function changeContentKawa() {
    div.innerHTML = `
    <div class="row">
                <ul class="nav nav-pills flex-column flex-sm-row justify-content-center" style="padding: 0;">
                    <li class="nav-item">
                        <button class="flex-sm-fill text-sm-center nav-link subnav-link active" aria-current="page" id="buttonKawa">Kawa</button>
                    </li>
                    <li class="nav-item">
                        <button class="flex-sm-fill text-sm-center nav-link subnav-link" id="buttonDoKawy">Do kawy</button>
                    </li>
                    <li class="nav-item">
                        <button class="flex-sm-fill text-sm-center nav-link subnav-link" id="buttonKoszyk">Koszyk</button>
                    </li>
                </ul>
            </div>
            <div class="row">
                <div class="col-md-2" style="margin-bottom:20px; background-color: #8B6642; border-radius: 50px; height: 235px; width: 235px; padding:0;"><img src="skins/americano_1.png" alt="Americano" style="margin: 17.5px;" width="200px" height="200px"></div>
                <div class="col-md-2 menu-text d-flex align-items-center" style="margin-bottom: 20px;">Americano<br />21.37zł</div>
                <div class="col-md-8" style="height: fit-content; background-color: #8B6642; border-radius: 20px; margin-bottom: 20px;">
                    <div class="row">
                        <div class="col-sm-10 menu-text">
                            <div class="row"><div class="col-md-12">Dodatki:</div></div>
                            <div class="row">
                                <div class="col-md-6"> 
                                    <input class="form-check-input" type="checkbox" id="dodatek1A" name="dodatekA1" value=" - Mleko">
                                    <label for="dodatek1A"> mleko</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek2A" name="dodatekA2" value=" - Cukier">
                                    <label for="dodatek2A"> cukier</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek3A" name="dodatekA3" value=" - Wanilia">
                                    <label for="dodatek3A"> wanilia</label> 
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek4A" name="dodatekA4" value=" - Cynamon">
                                    <label for="dodatek4A"> cynamon</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek5A" name="dodatekA5" value=" - Bita śmietana">
                                    <label for="dodatek5A"> bita śmietana</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek6A" name="dodatekA6" value=" - Lody">
                                    <label for="dodatek6A"> lody</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek7A" name="dodatekA7" value=" - Owoce leśne">
                                    <label for="dodatek7A"> owoce leśne</label> 
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <button class="addToCart" id="AmericanoButton" onclick="addToCart('dodatekA')"><img src="skins/shopping_cart.png" style="height:100%;" width="240px" alt="shopping_cart">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2" style="margin-bottom:20px; background-color: #8B6642; border-radius: 50px; height: 235px; width: 235px; padding:0;"><img src="skins/cappuccino_1.png" alt="Cappuccino" style="margin: 17.5px;" width="200px" height="200px"></div>
                <div class="col-md-2 menu-text d-flex align-items-center" style="margin-bottom: 20px;">Cappuccino<br />13.37zł</div>
                <div class="col-md-8" style="height: fit-content; background-color: #8B6642; border-radius: 20px;  margin-bottom: 20px;">
                    <div class="row">
                        <div class="col-sm-10 menu-text">
                            <div class="row"><div class="col-md-12">Dodatki:</div></div>
                            <div class="row">
                                <div class="col-md-6"> 
                                    <input class="form-check-input" type="checkbox" id="dodatek1C" name="dodatekC1" value=" - Mleko">
                                    <label for="dodatek1A"> cukier</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek2C" name="dodatekC2" value=" - Cukier">
                                    <label for="dodatek2A"> wanilia</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek3C" name="dodatekC3" value=" - Wanilia">
                                    <label for="dodatek3A"> cynamon</label> 
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek4C" name="dodatekC4" value=" - Cynamon">
                                    <label for="dodatek4A"> lody</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek5C" name="dodatekC5" value=" - Bita śmietana">
                                    <label for="dodatek5A"> owoce leśne</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <button class="addToCart" id="CappuccinoButton" onclick="addToCart('dodatekC')"><img src="skins/shopping_cart.png" style="height:100%;" width="240px" alt="shopping_cart">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2" style="margin-bottom:20px; background-color: #8B6642; border-radius: 50px; height: 235px; width: 235px; padding:0;"><img src="skins/latte.png" alt="Latte Macchiato" style="margin: 17.5px;" width="200px" height="200px"></div>
                <div class="col-md-2 menu-text d-flex align-items-center" style="margin-bottom: 20px;">Latte Macchiato<br />25.80zł</div>
                <div class="col-md-8" style="height: fit-content; background-color: #8B6642; border-radius: 20px; margin-bottom: 20px;">
                    <div class="row">
                        <div class="col-sm-10 menu-text">
                            <div class="row"><div class="col-md-12">Dodatki:</div></div>
                            <div class="row">
                                <div class="col-md-6"> 
                                    <input class="form-check-input" type="checkbox" id="dodatek1L" name="dodatekL1" value=" - Cukier">
                                    <label for="dodatek1L"> cukier</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek2L" name="dodatekL2" value=" - Wanilia">
                                    <label for="dodatek2L"> wanilia</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek3L" name="dodatekL3" value=" - Cynamon">
                                    <label for="dodatek3L"> cynamon</label> 
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek4L" name="dodatekL4" value=" - Lody">
                                    <label for="dodatek4L"> lody</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek5L" name="dodatekL5" value=" - Owoce leśne">
                                    <label for="dodatek5L"> owoce leśne</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <button class="addToCart" id="LatteButton" onclick="addToCart('dodatekL')"><img src="skins/shopping_cart.png" style="height:100%;" width="240px" alt="shopping_cart">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2" style="margin-bottom:20px; background-color: #8B6642; border-radius: 50px; height: 235px; width: 235px; padding:0;"><img src="skins/espresso.png" alt="Espresso" style="margin: 17.5px;" width="200px" height="200px"></div>
                <div class="col-md-2 menu-text d-flex align-items-center" style="margin-bottom: 20px;">Espresso<br />9.11zł</div>
                <div class="col-md-8" style="height: fit-content; background-color: #8B6642; border-radius: 20px; margin-bottom: 20px;">
                    <div class="row">
                        <div class="col-sm-10 menu-text">
                            <div class="row"><div class="col-md-12">Dodatki:</div></div>
                            <div class="row">
                                <div class="col-md-6"> 
                                    <input class="form-check-input" type="checkbox" id="dodatek1E" name="dodatekE1" value=" - Cukier">
                                    <label for="dodatek1E"> cukier</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <button class="addToCart" id="EspressoButton" onclick="addToCart('dodatekE')"><img src="skins/shopping_cart.png" style="height:100%;" width="240px" alt="shopping_cart">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2" style="margin-bottom:20px; background-color: #8B6642; border-radius: 50px; height: 235px; width: 235px; padding:0;"><img src="skins/Chocolate.png" alt="HotChoccy" style="margin: 17.5px;" width="200px" height="200px"></div>
                <div class="col-md-2 menu-text d-flex align-items-center" style="margin-bottom: 20px;">Gorąca czekolada<br />9.11zł</div>
                <div class="col-md-8" style="height: fit-content; background-color: #8B6642; border-radius: 20px; margin-bottom: 20px;">
                    <div class="row">
                        <div class="col-sm-10 menu-text">
                            <div class="row"><div class="col-md-12">Dodatki:</div></div>
                            <div class="row">
                                <div class="col-md-6"> 
                                    <input class="form-check-input" type="checkbox" id="dodatek1G" name="dodatekG1" value=" - Cukier">
                                    <label for="dodatek1G"> cukier</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek2G" name="dodatekG2" value=" - Wanilia">
                                    <label for="dodatek2G"> wanilia</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek3G" name="dodatekG3" value=" - Cynamon">
                                    <label for="dodatek3G"> cynamon</label> 
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek4G" name="dodatekG4" value=" - Bita śmietana">
                                    <label for="dodatek4G"> bita śmietana</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek5G" name="dodatekG5" value=" - Lody">
                                    <label for="dodatek5G"> lody</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek6G" name="dodatekG6" value=" - Owoce leśne">
                                    <label for="dodatek6G"> owoce leśne</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <button class="addToCart" id="CzekoladaButton" onclick="addToCart('dodatekG')"><img src="skins/shopping_cart.png" style="height:100%;" width="240px" alt="shopping_cart">
                        </div>
                    </div>
                </div>
            </div>`;
    attachEventListeners();
}

function changeContentDoKawy() {
    div.innerHTML = `
        <div class="row">
            <ul class="nav nav-pills flex-column flex-sm-row justify-content-center" style="padding: 0;">
                <li class="nav-item">
                    <button class="flex-sm-fill text-sm-center nav-link subnav-link" aria-current="page" id="buttonKawa">Kawa</button>
                </li>
                <li class="nav-item">
                    <button class="flex-sm-fill text-sm-center nav-link subnav-link active" id="buttonDoKawy">Do kawy</button>
                </li>
                <li class="nav-item">
                    <button class="flex-sm-fill text-sm-center nav-link subnav-link" id="buttonKoszyk">Koszyk</button>
                </li>
            </ul>
        </div>
        <div class="row">
                <div class="col-md-12 menu-text" style="margin-bottom: 20px; text-align: center;">Wszystkie dodatki do kawy za 3,50 zł</div>
            </div>
            <div class="row">
                <div class="col-md-2" style="margin-right:20px; margin-bottom: 20px; background-color: #8B6642; border-radius: 50px; height: 235px; width: 235px; padding:0;"><img src="skins/cookie_1.png" alt="Americano" style="margin: 17.5px;" width="200px" height="200px"></div>
                <div class="col-md-10" style="margin-bottom: 20px; height: fit-content; background-color: #8B6642; border-radius: 20px;">
                    <div class="row">
                        <div class="col-sm-10 menu-text d-flex align-items-center">
                            Ciastko z kawałkami czekolady<br />
                            Pyszne, z rozpływającymi się w ustach kawałkami czekolady.
                        </div>
                        <div class="col-sm-2">
                            <button class="addToCart" id="CiastkoButton" onclick="addToCartDoKawy('Ciastko')"><img src="skins/shopping_cart.png" style="height:100%;" width="240px" alt="shopping_cart">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2" style="margin-right:20px; margin-bottom: 20px; background-color: #8B6642; border-radius: 50px; height: 235px; width: 235px; padding:0;"><img src="skins/cheesecake_1.png" alt="Americano" style="margin: 17.5px;" width="200px" height="200px"></div>
                <div class="col-md-10" style="margin-bottom: 20px; height: fit-content; background-color: #8B6642; border-radius: 20px;">
                    <div class="row">
                        <div class="col-sm-10 menu-text d-flex align-items-center">
                            Domowy sernik<br />
                            Sernik bez rodzynek przygotowany na miejscu.
                        </div>
                        <div class="col-sm-2">
                            <button class="addToCart" id="SernikButton" onclick="addToCartDoKawy('Sernik')"><img src="skins/shopping_cart.png" style="height:100%;" width="240px" alt="shopping_cart">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2" style="margin-right:20px; margin-bottom: 20px; background-color: #8B6642; border-radius: 50px; height: 235px; width: 235px; padding:0;"><img src="skins/muffin_1.png" alt="Americano" style="margin: 17.5px;" width="200px" height="200px"></div>
                <div class="col-md-10" style="margin-bottom: 20px; height: fit-content; background-color: #8B6642; border-radius: 20px;">
                    <div class="row">
                        <div class="col-sm-10 menu-text d-flex align-items-center">
                            Czekoladowa muffinka<br />
                            Nasz bestseller, zawiera półpłynne nadzienie czekoladowe.
                        </div>
                        <div class="col-sm-2">
                            <button class="addToCart" id="MuffinButton" onclick="addToCartDoKawy('Muffin')"><img src="skins/shopping_cart.png" style="height:100%;" width="240px" alt="shopping_cart">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2" style="margin-right:20px; margin-bottom: 20px; background-color: #8B6642; border-radius: 50px; height: 235px; width: 235px; padding:0;"><img src="skins/paczek_1.png" alt="Americano" style="margin: 17.5px;" width="200px" height="200px"></div>
                <div class="col-md-10" style="margin-bottom: 20px; height: fit-content; background-color: #8B6642; border-radius: 20px;">
                    <div class="row">
                        <div class="col-sm-10 menu-text d-flex align-items-center">
                            Pączek z dżemem wieloowocowym<br />
                            Niskokaloryczne i z niską zawartością cukru, i tłuszczu, idealne dla osób na diecie.
                        </div>
                        <div class="col-sm-2">
                        <button class="addToCart" id="PaczekButton" onclick="addToCartDoKawy('Pączek')"><img src="skins/shopping_cart.png" style="height:100%;" width="240px" alt="shopping_cart">
                        </div>
                    </div>
                </div>
            </div>`;
    attachEventListeners();
}

function changeContentKoszyk() {
    div.innerHTML = `
    <div class="row">
                <ul class="nav nav-pills flex-column flex-sm-row justify-content-center" style="padding: 0;">
                    <li class="nav-item">
                        <button class="flex-sm-fill text-sm-center nav-link subnav-link" aria-current="page" id="buttonKawa">Kawa</button>
                    </li>
                    <li class="nav-item">
                        <button class="flex-sm-fill text-sm-center nav-link subnav-link" id="buttonDoKawy">Do kawy</button>
                    </li>
                    <li class="nav-item">
                        <button class="flex-sm-fill text-sm-center nav-link subnav-link active" id="buttonKoszyk">Koszyk</button>
                    </li>
                </ul>
            </div>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8 menu-text" style="background-color: #8B6642; border-radius: 20px; min-height: 500px; padding: 10px 12px;" id="koszykContent">
                    <p>Koszyk jest pusty.</p>
                </div>
                <div class="col-md-2"></div>
            </div>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8 smaller-box flex-column flex-sm-row d-flex align-items-center justify-content-center text-uppercase menu-text" style="padding: 0; background-color: #623500; border-radius: 10px; min-height: 101px; width: 515px; margin: 20px 0; font-size: 32px;">
                    <button class="btn pay-btn menu-text d-flex align-items-center justify-content-center" style="height: 100%; width: 100%;" onclick="kupuj()">Kupuję i płacę</button>
                </div>
                <div class="col-md-2">
            </div>`
            ;
showCartContent();
attachEventListeners();
}

var totalPrice = 0;
var cappuccinoOrder = '';
var americanoOrder = '';
var latteOrder = '';
var espressoOrder = '';
var chocoOrder = '';

function showCartContent() {
    const koszykContent = document.getElementById('koszykContent');
    koszykContent.innerHTML = `<h3>Zawartość koszyka:</h3>`;
    
    if (koszyk.length === 0) {
        koszykContent.innerHTML += `<p>Koszyk jest pusty.</p>`;
    } else {
        koszykContent.innerHTML += `<ul class="list-group list-group-flush">`;
        koszyk.forEach(item => {
            koszykContent.innerHTML += `<li class="list-group-item">${item}</li>`;
        });
        var totalPrice = ceny.reduce((acc, curr) => acc + curr, 0).toFixed(2);
        koszykContent.innerHTML += `
        <hr style="opacity: 1; border: 2px solid white;">
        Razem: ${totalPrice} zł
        `;
        koszykContent.innerHTML += `</ul>`;
    }
}

function attachEventListeners() {
    const buttonKawa = document.getElementById('buttonKawa');
    const buttonDoKawy = document.getElementById('buttonDoKawy');
    const buttonKoszyk = document.getElementById('buttonKoszyk');
    const div = document.getElementById('menuContent');
    buttonKawa.addEventListener('click', changeContentKawa);
    buttonDoKawy.addEventListener('click', changeContentDoKawy);
    buttonKoszyk.addEventListener('click', changeContentKoszyk);
}

var koszyk = [];
var ceny = [];

function addToCart(setName) {
    var kawa = setName;
    var checkboxes = document.querySelectorAll('input[name^="' + setName + '"]:checked');
    var wybraneDodatki = [];

    checkboxes.forEach(function (checkbox) {
        wybraneDodatki.push(checkbox.value);
        checkbox.checked = false;
    });

    if (kawa == 'dodatekA') {
        var americanoOrder = 'Americano';
        if (wybraneDodatki.length != 0) {
            americanoOrder += '<br> ' + wybraneDodatki.join('<br> ');
        }
        americanoOrder += ` 21.37 zł <button class="btn btn-danger" onclick="removeFromCart(this)">Usuń</button>`; // Pass the button element
        koszyk.push(americanoOrder);
        ceny.push(21.37);
    } else if (kawa == 'dodatekC') {
        var cappuccinoOrder = 'Cappuccino';
        if (wybraneDodatki.length != 0) {
            cappuccinoOrder += '<br> ' + wybraneDodatki.join('<br> ');
        }
        cappuccinoOrder += ` 13.37 zł <button class="btn btn-danger" onclick="removeFromCart(this)">Usuń</button>`; // Pass the button element
        koszyk.push(cappuccinoOrder);
        ceny.push(13.37);
    } else if (kawa == 'dodatekL') {
        var latteOrder = 'Latte Macchiato';
        if (wybraneDodatki.length != 0) {
            latteOrder += '<br> ' + wybraneDodatki.join('<br> ');
        }
        latteOrder += ` 25.80 zł <button class="btn btn-danger" onclick="removeFromCart(this)">Usuń</button>`; // Pass the button element
        koszyk.push(latteOrder);
        ceny.push(25.80);
    } else if (kawa == 'dodatekE') {
        var espressoOrder = 'Espresso';
        if (wybraneDodatki.length != 0) {
            espressoOrder += '<br> ' + wybraneDodatki.join('<br> ');
        }
        espressoOrder += ` 9.11 zł <button class="btn btn-danger" onclick="removeFromCart(this)">Usuń</button>`; // Pass the button element
        koszyk.push(espressoOrder);
        ceny.push(9.11);
    } else if (kawa == 'dodatekG') {
        var chocoOrder = 'Gorąca czekolada';
        if (wybraneDodatki.length != 0) {
            chocoOrder += '<br> ' + wybraneDodatki.join('<br> ');
        }
        chocoOrder += ` 9.11 zł <button class="btn btn-danger" onclick="removeFromCart(this)">Usuń</button>`; // Pass the button element
        koszyk.push(chocoOrder);
        ceny.push(9.11);
    }
    showPopup();
}

function removeFromCart(buttonElement) {
    var itemContent = buttonElement.parentElement.innerHTML;
    var index = koszyk.indexOf(itemContent);
    if (index !== -1) {
        ceny.splice(index, 1);
        koszyk.splice(index, 1);
        showCartContent();
    }
}

function addToCartDoKawy(value) {
    koszyk.push(value + ` 3,50 zł <button class="btn btn-danger" onclick="removeFromCart(this)">Usuń</button>`);
    ceny.push(3.50);
    showPopup();
}

function showPopup() {
    var popup = document.getElementById("popup");

    // Clear existing timeout and hide the popup immediately
    clearTimeout(popup.timeoutId);
    popup.classList.remove("show");

    // Make sure the element is displayed before transitioning
    popup.style.display = "block";

    // Set a very short timeout to ensure the transition takes effect
    setTimeout(function() {
        popup.classList.add("show");
    }, 0);

    // Hide the popup after a few seconds (adjust the timeout as needed)
    popup.timeoutId = setTimeout(function() {
        popup.classList.remove("show");
    }, 1000); // 2000 milliseconds = 2 seconds
}

function wyswietlKoszyk() {
    alert(koszyk.join('\n'));
    console.log(koszyk);
}
function kupuj() {
    // Add your logic for processing the order and handling payments here
    // For demonstration purposes, let's use a confirm dialog

    var totalPrice = ceny.reduce((acc, curr) => acc + curr, 0).toFixed(2);
    var confirmation = confirm("Zamówienie zostało złożone. Do zapłaty: " + totalPrice + " zł. Kliknij 'OK', aby przejść do strony płatności.");

    // Clear the cart after processing the order
    koszyk = [];
    ceny = [];

    // Update the cart content display
    showCartContent();

    // Redirect to kup.html if the user clicked "OK" in the confirm dialog
    if (confirmation) {
        window.location.href = "kup.html";
    }
}

attachEventListeners();