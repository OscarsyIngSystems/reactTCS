export interface Item {
    id:string,
    text: string,
    createdAt: Date
}

export interface FormProps {
    onAddItem: (item: Item ) => void
}

export interface ListProps {
    arrayitems: Item[]
    onDeleteItem: (id: string) => void
}

