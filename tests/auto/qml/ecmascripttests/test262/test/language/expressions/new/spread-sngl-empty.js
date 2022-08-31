// This file was procedurally generated from the following sources:
// - src/spread/sngl-empty.case
// - src/spread/default/member-expr.template
/*---
description: Spread operator applied to the only argument when no iteration occurs (`new` operator)
esid: sec-new-operator-runtime-semantics-evaluation
es6id: 12.3.3.1
flags: [generated]
info: |
    MemberExpression : new MemberExpression Arguments

    1. Return EvaluateNew(MemberExpression, Arguments).

    12.3.3.1.1 Runtime Semantics: EvaluateNew

    6. If arguments is empty, let argList be an empty List.
    7. Else,
       a. Let argList be ArgumentListEvaluation of arguments.
       [...]

    12.3.6.1 Runtime Semantics: ArgumentListEvaluation

    ArgumentList : ... AssignmentExpression

    1. Let list be an empty List.
    2. Let spreadRef be the result of evaluating AssignmentExpression.
    3. Let spreadObj be GetValue(spreadRef).
    4. Let iterator be GetIterator(spreadObj).
    5. ReturnIfAbrupt(iterator).
    6. Repeat
       a. Let next be IteratorStep(iterator).
       b. ReturnIfAbrupt(next).
       c. If next is false, return list.
       [...]
---*/

var callCount = 0;

new function() {
  assert.sameValue(arguments.length, 0);
  callCount += 1;
}(...[]);

assert.sameValue(callCount, 1);
