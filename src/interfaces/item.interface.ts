export interface Item {
    id:string,
    text: string,
    createdAt: Date
}

export interface FormProps {
    onAddItem: (item: Omit<Item,'id'> ) => void
}

export interface ListProps {}

