import { useEffect, useState } from "react";
import Functionality from "../components/Functionality";
import Header from "../components/Header";
import Item from "../components/Item";
import { Todo } from "../data/Todos";
import { TodoType, EditType } from "../libs/types/type";

const Home = () => {
  const [input, setInput] = useState<string>("");
  const [items, setItems] = useState<TodoType[]>(Todo); //All the items
  const [edit, setEdit] = useState<EditType>({
    isEdit: false,
    id: null,
  }); //If any todo is edited it's id is used to edit and isEdit will change the button from ADD to EDIT
  const [currentTab, setCurrentTab] = useState<string>("All Tasks");
  const [showItems, setShowItems] = useState<TodoType[]>(Todo); //Items on the basis of the current selected tab

  //If the tab is changed then the items are also updated
  const changeTab = (tab: string, items: TodoType[]) => {
    let _items: TodoType[] = items.filter((item: TodoType) => {
      if (tab === "Pending" && item.pending) {
        return true;
      } else if (tab === "All Tasks") {
        return true;
      } else if (tab === "Completed" && item.isCompleted) {
        return true;
      }
      return false;
    });
    // console.log({ tab, _items });
    setShowItems(_items);
    setCurrentTab(tab);
  };

  //Adding the elements in the TODO List
  const addItems = () => {
    const newItem: TodoType = {
      value: input,
      pending: true,
      isCompleted: false,
      id: Math.floor(Math.random() * 100) + input,
    };
    setItems([newItem, ...items]);
    setInput("");
    changeTab(currentTab, [newItem, ...items]);
  };

  //Deleting the items in TODO List
  const deleteItem = (id: string) => {
    let _items: TodoType[] = items.map((item: TodoType) => {
      if (item.id === id) {
        return { ...item, pending: false, isCompleted: false };
      }
      return item;
    });
    setItems(_items);
    changeTab(currentTab, [..._items]);
  };

  const undo = (id: string) => {
    let _items: TodoType[] = items.map((item: TodoType) => {
      if (item.id === id) {
        return { ...item, pending: true };
      }
      return item;
    });
    setItems(_items);
    changeTab(currentTab, [..._items]);
  };

  const updateItem = (data: TodoType) => {
    let { value, id }: { value: string; id: string } = data;
    setInput(value);
    setEdit({
      isEdit: true,
      id: id,
    });
  };

  const editItem = () => {
    if (input && edit.isEdit) {
      let id = edit.id;
      let _item: TodoType[] = items.map((item: TodoType) => {
        if (item.id == id) {
          return { ...item, value: input };
        }
        return item;
      });

      setItems(_item);
      setEdit({
        isEdit: false,
        id: null,
      });
      setInput("");
      changeTab(currentTab, [..._item]);
    }
  };

  const completeItem = (data: TodoType) => {
    let _items: TodoType[] = items.map((item: TodoType) => {
      if (data.id == item.id && data.pending) {
        return { ...item, pending: false, isCompleted: true };
      }
      return item;
    });

    setItems(_items);
    changeTab(currentTab, [..._items]);
  };

  return (
    <div className="main h-screen">
      <Header
        input={input}
        setInput={setInput}
        edit={edit}
        addItems={addItems}
        editItem={editItem}
      />

      <Functionality
        currentTab={currentTab}
        changeTab={changeTab}
        items={items}
      />

      <div className="tasks flex flex-col items-center gap-2 mt-2">
        {showItems.map((singleItem, index) => {
          return (
            <Item
              data={singleItem}
              key={index}
              deleteItem={deleteItem}
              undo={undo}
              updateItem={updateItem}
              completeItem={completeItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
