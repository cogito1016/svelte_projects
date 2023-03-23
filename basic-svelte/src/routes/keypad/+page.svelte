<script>
// @ts-nocheck
    import Keypad from "./keypad.svelte";

</script>

<div id="keypad">
    <h1>Key Pad</h1>
    <input id="keypadResultInp" placeholder="Click the keypad element"/>
    <Keypad />
</div>

<style>
    #keypad{
        text-align: center;
    }
    #keypadResultInp{
        width:200px;
        height:50px;
        margin : 20px 0;
    }
</style>

