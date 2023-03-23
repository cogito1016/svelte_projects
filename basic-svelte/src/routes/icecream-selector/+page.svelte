<script lang="ts">
    let scoops = 1;
    let menus = ['choco','mint','apple'];
    let flavors :string[] = [];
</script>

<div>
    <h1> Hello! </h1>
    <h2> Please choice the ice cream</h2>

    <h3>Scoop</h3>
    
    <label><input type="radio" bind:group={scoops} name="scoops" value =1/>One Scoop</label>
    <label><input type="radio" bind:group={scoops} name="scoops" value =2/>Two Scoop</label>
    <label><input type="radio" bind:group={scoops} name="scoops" value =3/>Three Scoop</label>

    <h3>Flavor</h3>
    {#each menus as flavor}
    <label><input type="checkbox" bind:group={flavors} name="flavors" value={flavor}/>{flavor}</label>
    {/each}

    <h3>The Reulst</h3>
    <p>
        {scoops} scoop, and the flavor is {flavors}
    </p>
</div>