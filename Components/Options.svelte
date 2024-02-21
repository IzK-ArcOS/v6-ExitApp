<script lang="ts">
  import { Runtime } from "../ts/runtime";
  import { ExitActions } from "../ts/store";

  export let runtime: Runtime;

  const { selected } = runtime;
</script>

<div class="options">
  {#each Object.entries(ExitActions) as [id, action]}
    <button class="option" on:click={() => ($selected = id)} class:selected={$selected == id}>
      <img src={action.icon} alt="" class="icon" />
      <p>{action.caption}</p>
    </button>
  {/each}
</div>
