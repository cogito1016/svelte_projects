<script lang="ts">
    import { count } from "./store";
    let countValue : number;

    count.subscribe((value)=>countValue=value);

</script>


<div>
    this count is {countValue};
</div>