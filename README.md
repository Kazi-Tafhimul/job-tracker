1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById only return that element which match with the given id . getElementsByClassName returns all items which share the same class. querySelector only give the first element which matches with the given css selector. queryselectorAll returns all items tha match with the given css selector.

2. How do you create and insert a new element into the DOM?
Ans: At first I will create a element by document.CreateElement('tagname').Then we can add text or class on the created element. After this I need to append this element inside a parent by using parentName.appendchild(my created element name).

3. What is Event Bubbling? And how does it work?
Ans: It is an event which start at very specific element for example a button and then move upwards through its parents. 

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: It is a technique where we add one event listener to a parent element to manage all events from its current and future children.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() stop browser default action but event bubbling still happen . On the other hand , stopPropagation() stop event bubbling but it doesn't stop the browser default action. It stops event bubbling up to parents element.
