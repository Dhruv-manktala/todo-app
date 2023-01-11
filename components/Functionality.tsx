import { FunctionalityPropsType } from "../libs/types/index.ts/type";

const Functionality = ({
  items,
  currentTab,
  changeTab,
}: FunctionalityPropsType) => {
  return (
    <div className="functions flex justify-center align-center gap-2 pt-4">
      <button
        className={
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded" +
          (currentTab === "All Tasks" ? " border-gray-800 border-b-4" : "")
        }
        onClick={() => {
          changeTab("All Tasks", items);
        }}
      >
        All Tasks
      </button>
      <button
        className={
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded" +
          (currentTab === "Pending" ? " border-gray-800 border-b-4" : "")
        }
        onClick={() => {
          changeTab("Pending", items);
        }}
      >
        Pending
      </button>
      <button
        className={
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded" +
          (currentTab === "Completed" ? " border-gray-800 border-b-4" : "")
        }
        onClick={() => {
          changeTab("Completed", items);
        }}
      >
        Completed
      </button>
    </div>
  );
};

export default Functionality;
