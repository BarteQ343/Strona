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
            <div class="col-md-8" style="height: fit-content; background-color: #8B6642; border-radius: 20px;">
                <div class="row">
                    <div class="col-sm-10 menu-text d-flex align-items-center">
                        Dodatki:
                        mleko, cukier, wanilia, cynamon, bita śmietana, lody, owoce leśne
                    </div>
                    <div class="col-sm-2">
                        <img src="skins/shopping_cart.png" style="background-color: white; border-radius: 20px; height:100%;" width="240px" alt="shopping_cart">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2" style="margin-bottom:20px; background-color: #8B6642; border-radius: 50px; height: 235px; width: 235px; padding:0;"><img src="skins/cappuccino_1.png" alt="Cappuccino" style="margin: 17.5px;" width="200px" height="200px"></div>
            <div class="col-md-2 menu-text d-flex align-items-center" style="margin-bottom: 20px;">Cappuccino<br />13.37zł</div>
            <div class="col-md-8" style="height: fit-content; background-color: #8B6642; border-radius: 20px;">
                <div class="row">
                    <div class="col-sm-10 menu-text d-flex align-items-center">
                        Dodatki:
                        cukier, wanilia, cynamon, lody, owoce leśne
                    </div>
                    <div class="col-sm-2">
                        <img src="skins/shopping_cart.png" style="background-color: white; border-radius: 20px; height:100%;" width="240px" alt="shopping_cart">
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
                            <img src="skins/shopping_cart.png" style="background-color: white; border-radius: 20px; height:100%;" width="240px" alt="shopping_cart">
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
                            <img src="skins/shopping_cart.png" style="background-color: white; border-radius: 20px; height:100%;" width="240px" alt="shopping_cart">
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
                            <img src="skins/shopping_cart.png" style="background-color: white; border-radius: 20px; height:100%;" width="240px" alt="shopping_cart">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2" style="margin-right:20px; margin-bottom: 20px; background-color: #8B6642; border-radius: 50px; height: 235px; width: 235px; padding:0;"><img src="skins/paczek_1.png" alt="Americano" style="margin: 17.5px;" width="200px" height="200px"></div>
                <div class="col-md-10" style="margin-bottom: 20px; height: fit-content; background-color: #8B6642; border-radius: 20px;">
                    <div class="row">
                        <div class="col-sm-10 menu-text d-flex align-items-center">
                            Pączek z dżemem wieloowocowym/różanym<br />
                            Niskokaloryczne i z niską zawartością cukru, i tłuszczu, idealne dla osób na diecie.
                        </div>
                        <div class="col-sm-2">
                            <img src="skins/shopping_cart.png" style="background-color: white; border-radius: 20px; height:100%;" width="240px" alt="shopping_cart">
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
        </div>`;
    attachEventListeners();
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

attachEventListeners();