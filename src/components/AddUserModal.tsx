export default () => (
  <div
    id="add_user_modal"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
  >
    <div
      _="on click elsewhere remove #add_user_modal"
      class="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full"
    >
      <form hx-post="/add_user" hx-target="#users-list" hx-swap="beforeend">
        <div class="px-6 py-4">
          <h3 class="text-2xl font-semibold mb-4">Add new user</h3>
          <input
            class="w-full mt-2 px-4 py-2 border rounded"
            name="name"
            type="text"
            required
            placeholder="Name"
          />
          <input
            class="w-full mt-2 px-4 py-2 border rounded"
            name="email"
            type="email"
            required
            placeholder="Email"
          />
        </div>
        <div class="px-6 py-4 bg-gray-100 flex gap-2 justify-end">
          <div
            class="px-4 py-2 bg-red-500 text-white rounded"
            _="on click remove #add_user_modal"
          >
            Cancel
          </div>
          <button
            type="submit"
            class="px-4 py-2 bg-slate-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
);
