export interface TodoType{
    id:string,
    value:string,
    pending:boolean,
    isCompleted:boolean,
}

export interface EditType{
    isEdit: boolean,
    id: null|string,
}

export interface ItemPropsType{
  data:TodoType,
  deleteItem:(id:string)=>void,
  undo:(id:string)=>void,
  updateItem:(data:TodoType)=>void,
  completeItem:(data:TodoType)=>void,
}

export interface HeaderPropsType{
    input:string,
    setInput:(input:string)=>void,
    edit:EditType,
    addItems:()=>void,
    editItem:()=>void,
}

export interface FunctionalityPropsType{
    items:TodoType[],
  currentTab:String,
  changeTab:(tab: string, items: TodoType[])=>void
}

