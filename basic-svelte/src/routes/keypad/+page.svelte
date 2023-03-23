<script>
// @ts-nocheck
    import Keypad from "./keypad.svelte";
    let view = "";
</script>

<div id="keypad">
    <h1>Key Pad</h1>
    <h2 id="keypadResult">{view===""?"Click The Key Pad":view}</h2>
    <Keypad bind:result={view}/>
</div>

<style>
    #keypad{
        text-align: center;
    }

    #keypadResult{
        display: inline-block;
        width:200px;
        height:50px;
        line-height: 50px;
        margin : 20px 0;
        color: gray;
    }
</style>

