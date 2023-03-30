<script lang="ts">
    import { count } from "./store";
    let countValue : number;

    count.subscribe((value)=>countValue=value);

    function add(){
        count.update(n=>n+1)
    }

    function sub(){
        count.update(n=>n-1);
    }

    function reset(){
        count.set(0);
    }
</script>


<div>
    this count is {countValue};
    <button on:click={add}>증가</button>
    <button on:click={sub}>감소</button>
    <button on:click={reset}>초기화</button>
</div>