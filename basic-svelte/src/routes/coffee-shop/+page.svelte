<script>
	import { Milk } from "./additional-menu/Milk";
	import { Latte } from "./menu/Latte";

    let latte = new Latte();
    console.log(`${latte.description} ${latte.cost()}`);
    latte = new Milk(latte);
    console.log(`${latte.description} ${latte.cost()}`);
</script>

<div id="coffeeShopContainer">
    <h1>제이든 커피 샵</h1>
    <h2>메인메뉴(택1)</h2> 

    <div id='mainMenuContainer'>
        <input type="radio" name="mainMenu" id="latte" value="라떼">
        <label for="latte">라떼</label>
        <input type="radio" name="mainMenu" id="mocha" value="모카">
        <label for="mocha">모카</label>
        <input type="radio" name="mainMenu" id="espresso" value="에스프레소">
        <label for="espresso">에스프레소</label>
    </div>

    <br>
    <h2>추가메뉴(선택)</h2>
    <div id='additionalMenuContainer'>
        <input type="checkbox" name="additionalMenu" id="cream" value="크림">
        <label for="cream">크림</label>
        <input type="checkbox" name="additionalMenu" id="syrup" value="시럽">
        <label for="syrup">시럽</label>
        <input type="checkbox" name="additionalMenu" id="whippedCream" value="휘핑크림">
        <label for="whippedCream">휘핑크림</label>
    </div>

    <hr>
    <h2>최종 가격</h2>
    <div id="finalPriceContainer">
        <p>0</p>
    </div>
</div>

<style>
    #coffeeShopContainer{
        width: 500px;
        height: 500px;
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