var BackwardsActionIterator = /** @class */ (function () {
    function BackwardsActionIterator(_currentActionNode) {
        this._currentActionNode = _currentActionNode;
    }
    BackwardsActionIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    BackwardsActionIterator.prototype.next = function () {
        var curr = this._currentActionNode;
        if (!curr || !curr.value) {
            return { value: null, done: true };
        }
        else {
            this._currentActionNode = curr.prev;
            return { value: curr.value, done: false };
        }
    };
    return BackwardsActionIterator;
}());
var action1 = { type: "Login" };
var action2 = { type: "Load_post" };
var action3 = { type: "Display_post" };
var action4 = { type: "Logout" };
var actionNode1 = {
    prev: null,
    next: null,
    value: action1
};
var actionNode2 = {
    prev: actionNode1,
    next: null,
    value: action2
};
var actionNode3 = {
    prev: actionNode2,
    next: null,
    value: action3
};
var actionNode4 = {
    prev: actionNode3,
    next: null,
    value: action4
};
var backward = new BackwardsActionIterator(actionNode4);
for (var _i = 0, backward_1 = backward; _i < backward_1.length; _i++) {
    var action = backward_1[_i];
    console.log(action.type);
}
