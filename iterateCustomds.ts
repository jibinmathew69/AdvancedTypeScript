interface Action{
    type: string
}

interface ListNode<T>{
    value: T
    next: ListNode<T>
    prev: ListNode<T>
}

class BackwardsActionIterator implements IterableIterator<Action>{
    
    constructor(private _currentActionNode: ListNode<Action>) {

    }

    [Symbol.iterator](): IterableIterator<Action> {
        return this;
    }
    
    next(): IteratorResult<Action>{
        const curr = this._currentActionNode
        if (!curr || !curr.value){
            return {value: null, done: true}
        }else{
            this._currentActionNode = curr.prev
            return {value: curr.value, done: false}
        }
    }
}


let action1 = {type: "Login"}
let action2 = {type: "Load_post"}
let action3 = {type: "Display_post"}
let action4 = {type: "Logout"}

let actionNode1: ListNode<Action> = {
    prev: null,
    next: null,
    value: action1
}

let actionNode2: ListNode<Action> = {
    prev: actionNode1,
    next: null,
    value: action2
}

let actionNode3: ListNode<Action> = {
    prev: actionNode2,
    next: null,
    value: action3
}

let actionNode4: ListNode<Action> = {
    prev: actionNode3,
    next: null,
    value: action4
}


let backward = new BackwardsActionIterator(
    actionNode4
)

for(let action of backward){
    console.log(action.type)
}