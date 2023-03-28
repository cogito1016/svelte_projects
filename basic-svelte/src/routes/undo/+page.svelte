<script lang="ts">
    let list : number[] = [0];
    let updateTargetNumber = 0;
    let updateNumber = 0;

    const add = (val : number) => {
        list = [...list, val];
    }

    const changeNumber = () => {
        const result = list.map((item)=>{
            if(item===updateTargetNumber){
                return updateNumber;
            }
            return item;
        });
        list = result;
    }

</script>

<div>
    <h1>
        {list}
    </h1>
    <button on:click={()=>add(1)}>1</button>
    <button on:click={()=>add(2)}>2</button>
    <button on:click={()=>add(3)}>3</button>

    <hr/>
    <div>
        <p>{updateTargetNumber}를 {updateNumber}로 변경합니다.</p>
        <input bind:value={updateTargetNumber} />
        <input bind:value={updateNumber} />
        <button on:click={changeNumber}>변경</button>
    </div>

    <hr/>
    <div>
        <button>Undo</button>
    </div>
</div>

<style>
    h1{
        background-color: white;
        color: gray;
    }
</style>