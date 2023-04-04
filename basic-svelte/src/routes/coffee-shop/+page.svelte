<script lang="ts">
	import { Milk } from "./additional-menu/Milk";
	import { Syrup } from "./additional-menu/Syrup";
	import { Whip } from "./additional-menu/Whip";
	import { Espresso } from "./menu/Espresso";
	import { Latte } from "./menu/Latte";
	import type { Menu } from "./menu/menu";
	import { Moca } from "./menu/moca";

    let selectedMainMenu:string;
    let selectedAdditionalMenus:string[] = [];

    let mainMenu:Menu;

    const changeMainMenuView = () => {
        selectedAdditionalMenus = [];
        setMainMenu();
    }

    const changeAdditionalMenuView = ()=>{
        setMainMenu();
        setAdditionalMenus();
    }

    const setMainMenu = () => {
        if(selectedMainMenu==="latte"){
            mainMenu = new Latte();
        }else if(selectedMainMenu==="moca"){
            mainMenu = new Moca();
        }else if(selectedMainMenu==="espresso"){
            mainMenu = new Espresso();
        }
    }

    const setAdditionalMenus = () => {
        selectedAdditionalMenus.forEach((additionalMenu)=>{
            if(additionalMenu==="milk"){
                mainMenu = new Milk(mainMenu);
            }else if(additionalMenu==="syrup"){
                mainMenu = new Syrup(mainMenu);
            }else if(additionalMenu==="whip"){
                mainMenu = new Whip(mainMenu);
            }
        });
    }
    
</script>

<div id="coffeeShopContainer">
    <h1>제이든 커피 샵</h1>
    <h2>메인메뉴(택1)</h2> 

    <div id='mainMenuContainer'>
        <input type="radio" bind:group={selectedMainMenu} on:change={changeMainMenuView} value="latte">
        <label for="latte">라떼</label>
        <input type="radio" bind:group={selectedMainMenu} on:change={changeMainMenuView} value="moca">
        <label for="mocha">모카</label>
        <input type="radio" bind:group={selectedMainMenu} on:change={changeMainMenuView} value="espresso">
        <label for="espresso">에스프레소</label>
    </div>

    <br>
    {#if mainMenu===undefined}
    <h2>메인메뉴를 선택해주세요</h2>

    <hr>
    <h2>your coffee ingredients!</h2>
    <div id="finalPriceContainer">
        <p></p>
    </div>

    <hr>
    <h2>최종 가격</h2>
    <div id="finalPriceContainer">
        <p>0</p>
    </div>
    {:else}
    <h2>추가메뉴(선택)</h2>
    <div id='additionalMenuContainer'>
        <input type="checkbox" bind:group={selectedAdditionalMenus} on:change={changeAdditionalMenuView} value="milk">
        <label for="cream">우유</label>
        <input type="checkbox" bind:group={selectedAdditionalMenus} on:change={changeAdditionalMenuView} value="syrup">
        <label for="syrup">시럽</label>
        <input type="checkbox" bind:group={selectedAdditionalMenus} on:change={changeAdditionalMenuView} value="whip">
        <label for="whippedCream">휘핑크림</label>
    </div>

    <hr>
    <h2>your coffee ingredients!</h2>
    <div id="finalPriceContainer">
        <p>{mainMenu.description}</p>
    </div>

    <hr>
    <h2>최종 가격</h2>
    <div id="finalPriceContainer">
        <p>{mainMenu.cost()}</p>
    </div>
    {/if}
</div>

<style>
    #coffeeShopContainer{
        width: 500px;
        height: 600px;
        border: 1px solid black;
        margin: 0 auto;
        padding: 10px;
    }
    #mainMenuContainer{
        border: 1px solid black;
        height: 50px;
        padding: 10px;
    }
    #additionalMenuContainer{
        border: 1px solid black;
        height: 50px;
        padding: 10px;
    }
    #finalPriceContainer{
        border: 1px solid black;
        height: 50px;
        padding: 10px;
    }
</style>