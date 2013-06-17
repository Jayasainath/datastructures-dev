// Tests on inserts
/*
unShiftItem();
insertItemAfter();
pushItem();
*/

// Try to insert into an empty list using all the three methods with all the combinations

insertObject = {
	set_one: function(){
		var l = new LinkedList();
		l.insertItemAfter(12, 2);		// should fail as the list is empty
		l.unShiftItem(5);				// 5
		l.unShiftItem(4);				// 4, 5
		l.unShiftItem(3);				// 3, 4, 5
		l.unShiftItem(1);				// 1, 3, 4, 5
		l.unShiftItem(0);				// 0, 1, 3, 4, 5
		l.pushItem(8);					// 0, 1, 3, 4, 5, 8
		l.pushItem(9);					// 0, 1, 3, 4, 5, 8, 9
		l.insertItemAfter(2, 1);		// 0, 1, 2, 3, 4, 5, 8, 9
		l.insertItemAfter(6, 5);		// 0, 1, 2, 3, 4, 5, 6, 8, 9
		l.insertItemAfter(7, 6);		// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
		
		console.log("List from set_one: "+l.toStringArray());
	},

	set_two: function(){
		var l = new LinkedList();
		l.pushItem(13);					// 13
		l.pushItem(14);					// 13, 14
		l.insertItemAfter(12, 1);		// 13, 14, 12
		l.insertItemAfter(1, 0);		// 13, 1, 14, 12
		l.insertItemAfter(3, 3);		// 13, 1, 14, 12, 3
		l.unShiftItem(9);				// 9, 13, 1, 14, 12, 3
		l.pushItem(10);					// 9, 13, 1, 14, 12, 3, 10
		
		console.log("List from set_two: "+l.toStringArray());
	},
};

testForInserts = function(){
	insertObject.set_one();
	insertObject.set_two();
};

testForInserts();





// Tests on retreives
/*
getfirstItem();
getItemAt();
getLastItem();
*/





// Tests on deletes
/*
shiftItem();
removeItemAt();
popItem();
*/











/*var a = [];
var ll = new LinkedList();


(function(){
	for (var i = 0; i < 4; i++) {
		a.push(i);
	};
	console.log("Array is ready!");
})();

(function(){
	for (var i = 0; i < 4; i++) {
		ll.pushItem(i);
	};
	console.log("LinkedList is ready!" + ll.tail.data);
})();



runArrayTest = function(){
	var past = new Date().getTime();
	for (var i = 0; i < 4; i++) {
		a.pop(i);
	};
	var present = new Date().getTime();
	console.log("Array => Time elapsed: "+ (present-past) + " ms");
};

runLinkedListTest = function(){
	var past = new Date().getTime();
	for (var i = 0; i < 4; i++) {
		ll.popItem(i);
	};
	// var len = ll.getLength();
	var present = new Date().getTime();
	console.log("LinkedList => Time elapsed: "+ (present-past) + " ms");
};

runTests = function(){
	runArrayTest();
	runLinkedListTest();
};

runTests();*/









