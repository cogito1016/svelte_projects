<script lang="ts">
    export let result ="";
    const keyNums = [1,2,3,4,5,6,7,8,9];
    const changeResult = (str: string) => () => result+=str;
    $: console.log(`${result}`) 
</script>

<div id="keypadContainer">
    {#each keyNums as key }
        <button on:click={changeResult(`${key}`)}>{key}</button>
    {/each}
</div>

<style>
    #keypadContainer {
        width:150px;
        height:150px;
        margin: 0 auto;
        display: grid;
        grid-template-rows: 50px 50px 50px;
        grid-template-columns: 50px 50px 50px;
    }
</style>