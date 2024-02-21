<script lang="ts">
  import { ProcessStack } from "$ts/stores/process";
  import { sleep } from "$ts/util";
  import { Runtime } from "../ts/runtime";
  import { ExitActions } from "../ts/store";

  export let runtime: Runtime;

  const { selected, show } = runtime;

  function confirm() {
    if (!ExitActions[$selected]) return;

    ExitActions[$selected].action();

    exit();
  }

  async function exit() {
    $show = false;

    await sleep(200);

    ProcessStack.kill(runtime.pid, true);
  }
</script>

<div class="confirm">
  <button class="suggested" on:click={confirm} disabled={!selected}> Confirm </button>
  <button on:click={exit}>Cancel</button>
</div>
