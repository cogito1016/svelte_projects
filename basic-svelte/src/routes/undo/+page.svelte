<script lang="ts">
	import { Command } from "./command/command";
	import { CommandManager } from "./command/command-manager";
	import { EventType } from "./command/event-type";
	import Repository from "./command/repository";
	import { TargetData } from "./command/target-data";

    let list : number[];

    Repository.subscribe((value)=>list = value);

    const commandManager = new CommandManager();

    let updateTargetNumber = 0;
    let updateNumber = 0;

    const add = (val : number) => {
        const command = new Command(EventType.ADD,new TargetData(val,null));
        commandManager.push(command);
    }

    const deleteLatest = () => {
        const command = new Command(EventType.DELETE,null);
        commandManager.push(command);
    }

    const undo = () => {
        commandManager.undo();
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
        <!-- <input bind:value={updateTargetNumber} />
        <input bind:value={updateNumber} />
        <button on:click={changeNumber}>변경</button> -->
        <button on:click={deleteLatest}>삭제</button>
    </div>

    <hr/>
    <div>
        <button on:click={undo}>Undo</button>
    </div>
</div>

<style>
    h1{
        background-color: white;
        color: gray;
    }
</style>