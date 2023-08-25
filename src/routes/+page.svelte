<script>
  import { enhance } from "$app/forms";
  export let data;
  $: ({ todos } = data);
</script>

<div class="h-screen text-dark-400">
  <div class="grid place-content-center w-full h-full">
    <div class="card min-w-96 bg-base-100 shadow-xl p-5">
      <form action="?/create_todo" method="post" use:enhance>
        <div class="join">
          <input
            class="input input-bordered join-item"
            name="todo"
            placeholder="add - todo"
          />
          <button type="submit" class="btn join-item rounded-r-full">add</button
          >
        </div>
      </form>

      <div class="overflow-auto h-80 mt-5">
        <table class="table table-pin-rows table-lg">
          <!-- head -->
          <thead>
            <tr>
              <th>no</th>
              <th>Name</th>
              <th>status</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {#each todos as item, idx}
              <tr class="line-through">
                <th>{idx + 1}</th>
                <td>{item.todo}</td>
                <td>
                  <form action="?/update_status&id={item.id}" method="post">
                    <input type="hidden" name="status" value={item.done} />
                    <button type="submit" class="btn btn-secondary btn-xs"
                      >{item.done}</button
                    >
                  </form>
                </td>
                <td>{item.created_at}</td>
              </tr>
            {/each}
          </tbody>
        </table>

      </div>
    </div>
  </div>
</div>
