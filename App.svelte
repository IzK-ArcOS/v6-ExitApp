<script lang="ts">
  import { ProcessStack } from "$ts/stores/process";
  import { sleep } from "$ts/util";
  import { onMount } from "svelte";
  import "./css/main.css";
  import { Runtime } from "./ts/runtime";
  import { ExitActions } from "./ts/store";

  export let runtime: Runtime;

  let show = false;
  let selected = "";

  onMount(async () => {
    const args = runtime.process.args;
    const ids = Object.keys(ExitActions);

    if (typeof args[0] == "string" && ids.includes(args[0])) {
      selected = args[0];
    }

    await sleep(200);

    show = true;
  });

  function confirm() {
    if (!ExitActions[selected]) return;

    ExitActions[selected].action();

    exit();
  }

  async function exit() {
    show = false;

    await sleep(200);

    ProcessStack.kill(runtime.pid, true);
  }
</script>

<div class="bg"></div>
<div class="content" class:show>
  <div class="header">
    <h1>Exit ArcOS</h1>
    <p>What's your escape route?</p>
  </div>
  <div class="options">
    {#each Object.entries(ExitActions) as [id, action]}
      <button
        class="option"
        on:click={() => (selected = id)}
        class:selected={selected == id}
      >
        <img src={action.icon} alt="" class="icon" />
        <p>{action.caption}</p>
      </button>
    {/each}
  </div>
  <div class="confirm">
    <button class="suggested" on:click={confirm} disabled={!selected}
      >Confirm</button
    >
    <button on:click={exit}>Cancel</button>
  </div>
</div>
