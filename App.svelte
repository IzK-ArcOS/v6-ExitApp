<script lang="ts">
  import { sleep } from "$ts/util";
  import { onMount } from "svelte";
  import Confirm from "./Components/Confirm.svelte";
  import Header from "./Components/Header.svelte";
  import Options from "./Components/Options.svelte";
  import "./css/main.css";
  import { Runtime } from "./ts/runtime";
  import { ExitActions } from "./ts/store";

  export let runtime: Runtime;

  const { show, selected } = runtime;

  onMount(async () => {
    const args = runtime.process.args;
    const ids = Object.keys(ExitActions);

    if (typeof args[0] == "string" && ids.includes(args[0])) {
      $selected = args[0];
    }

    await sleep(200);

    $show = true;
  });
</script>

<div class="bg"></div>
<div class="content" class:show={$show}>
  <Header />
  <Options {runtime} />
  <Confirm {runtime} />
</div>
