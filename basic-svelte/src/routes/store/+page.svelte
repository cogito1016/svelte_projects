<script lang="ts">
    import {onDestroy} from 'svelte'
    import { count } from "./store";
    let countValue : number;

    /**
     * 구독취소를 안해주면 메모리누수가 발생된다.
    */
    // const unSubscribe = count.subscribe((value)=>countValue=value);

    function add(){
        count.update(n=>n+1)
    }

    function sub(){
        count.update(n=>n-1);
    }

    function reset(){
        count.set(0);
    }

    // onDestroy(unSubscribe);
</script>


<div>
    this count is {$count};
    <button on:click={add}>증가</button>
    <button on:click={sub}>감소</button>
    <button on:click={reset}>초기화</button>
</div>