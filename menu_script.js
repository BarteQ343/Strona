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
                                    <label for="dodatek1"> mleko</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek2A" name="dodatekA2" value=" - Cukier">
                                    <label for="dodatek2"> cukier</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek3A" name="dodatekA3" value=" - Wanilia">
                                    <label for="dodatek3"> wanilia</label> 
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek4A" name="dodatekA4" value=" - Cynamon">
                                    <label for="dodatek4"> cynamon</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek5A" name="dodatekA5" value=" - Bita śmietana">
                                    <label for="dodatek5"> bita śmietana</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek6A" name="dodatekA6" value=" - Lody">
                                    <label for="dodatek6"> lody</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek7A" name="dodatekA7" value=" - Owoce leśne">
                                    <label for="dodatek7"> owoce leśne</label> 
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
                                    <label for="dodatek1"> cukier</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek2C" name="dodatekC2" value=" - Cukier">
                                    <label for="dodatek2"> wanilia</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek3C" name="dodatekC3" value=" - Wanilia">
                                    <label for="dodatek3"> cynamon</label> 
                                </div>
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek4C" name="dodatekC4" value=" - Cynamon">
                                    <label for="dodatek4"> lody</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input class="form-check-input" type="checkbox" id="dodatek5C" name="dodatekC5" value=" - Bita śmietana">
                                    <label for="dodatek5"> owoce leśne</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <button class="addToCart" id="CappuccinoButton" onclick="addToCart('dodatekC')"><img src="skins/shopping_cart.png" style="height:100%;" width="240px" alt="shopping_cart">
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
                            <button class="addToCart" id="PaczekButton" onclick="addToCartDoKawy('Pączek)"><img src="skins/shopping_cart.png" style="height:100%;" width="240px" alt="shopping_cart">
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
            </div>`;
showCartContent();
attachEventListeners();
}

function showCartContent() {
    const koszykContent = document.getElementById('koszykContent');
    koszykContent.innerHTML = `<h3>Zawartość koszyka:</h3>`;
    
    if (koszyk.length === 0) {
        koszykContent.innerHTML += `<p>Koszyk jest pusty.</p>`;
    } else {
        koszykContent.innerHTML += `<ul>`;
        koszyk.forEach(item => {
            koszykContent.innerHTML += `<li>${item}</li>`;
        });
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

function addToCart(setName) {
    var kawa = setName;
    var checkboxes = document.querySelectorAll('input[name^="' + setName + '"]:checked');
    var wybraneDodatki = [];

    checkboxes.forEach(function(checkbox) {
        wybraneDodatki.push(checkbox.value);
        checkbox.checked = false;
    });
    
    if (kawa == 'dodatekA') {
        koszyk.push('Americano');
        if (wybraneDodatki.length != 0) {
            koszyk.push(wybraneDodatki.join('\n'));
        }
    } else if (kawa == 'dodatekC') {
        if (wybraneDodatki.length == 0) {
            koszyk.push('Cappucino 13.37 zł');
        }else if (wybraneDodatki.length != 0) {
            koszyk.push('Cappuccino');
            wybraneDodatki.push(' 13.37 zł');
            koszyk.push(wybraneDodatki.join(' '));
        } 
    }
    showPopup();
    showCartContent();
}
function addToCartDoKawy(value) {
    koszyk.push(value + " 3,50Zł ");
    showPopup();
    showCartContent();
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

attachEventListeners();