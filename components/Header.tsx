import { HeaderPropsType } from "../libs/types/type";

const Header = (props: HeaderPropsType) => {
  let { input, setInput, edit, addItems, editItem } = props;

  return (
    <div className="header bg-gray-400 flex justify-center items-center flex-col p-3">
      <div className="text-2xl">Todo App</div>

      <div className="input">
        <input
          type="text"
          value={input}
          className="rounded pl-2 outline-none"
          placeholder="Enter your task"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter" && input) {
              addItems();
            }
          }}
        />

        {!edit.isEdit ? (
          <button
            onClick={addItems}
            disabled={!input.length}
            className="bg-blue-500 hover:bg-blue-700 text-white ml-2 py-1 px-1 rounded"
          >
            Add
          </button>
        ) : (
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white ml-2 py-1 px-1 rounded"
            onClick={editItem}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
