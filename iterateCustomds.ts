interface Action{
    type: string
}

interface ListNode<T>{
    value: T
    next: ListNode<T>
    prev: ListNode<T>
}

