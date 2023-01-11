import { ItemPropsType } from "../libs/types/type";

const Item = ({
  data,
  deleteItem,
  undo,
  updateItem,
  completeItem,
}: ItemPropsType) => {
  let {
    value,
    pending,
    isCompleted,
  }: { value: String; pending: boolean; isCompleted: boolean } = data;
  return (
    <>
      <div className="task flex justify-center items-center border-2 px-4 py-2 border-blue-500 rounded-lg">
        {pending ? (
          <>
            <div className=" text-xl">{data.value}</div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white ml-2 py-1 px-1 rounded"
              onClick={() => {
                deleteItem(data.id);
              }}
            >
              Delete
            </button>

            <button
              className="bg-yellow-300 hover:bg-yellow-500 text-white ml-2 py-1 px-2 rounded"
              onClick={() => {
                updateItem(data);
              }}
            >
              Edit
            </button>

            <button
              className="bg-green-500 hover:bg-green-700 text-white ml-2 py-1 px-1 rounded"
              onClick={() => {
                completeItem(data);
              }}
            >
              Complete
            </button>
          </>
        ) : (
          <>
            {!isCompleted ? (
              <>
                <div className="line-through  ">{data.value}</div>
                <button
                  className="bg-gray-300 hover:bg-gray-500 text-white ml-2 py-1 px-2 rounded"
                  onClick={() => {
                    undo(data.id);
                  }}
                >
                  Undo
                </button>
              </>
            ) : (
              <>
                <div className=" text-xl">{data.value}</div>
                <span className="pl-2 text-green-500 text-2xl">Completed</span>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Item;
