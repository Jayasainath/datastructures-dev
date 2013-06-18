/*
==============================================================================================================================================
					Best 		Average 	Worst 		Memory 		Stable 		Method 				Optimizations 						Rank
==============================================================================================================================================
Binary Tree Sort 	n 			n log n 	n log n 	n 			Yes 		Insertion 			Self Balancing BST 						1
Merge Sort 			n log n 	n log n 	n log n 	Worst: n 	Yes 		Merging				3 Hungarians or Cole's Parallel			2
Heap Sort 			n log n 	n log n 	n log n 	1 			No 			Selection													3
Quick Sort 			n log n 	n log n 	n^2 		log n 		No 			Partitioning												4
Insertion Sort 		n 			n^2 		n^2 		1 			Yes 		Insertion													5
Bubble Sort 		n 			n^2 		n^2 		1 			Yes 		Exchange													5
==============================================================================================================================================
*/


/*
// Tests for Bubble Sort (Feel free to push 100,000 items to the list and then sort)
(function(){
	var l =  new LinkedList();
	var startTimeToPush = new Date().getTime();
	for (var i = 0; i < 1000; i++){
		l.pushItem(i);
	};
	var endTimeToPush = new Date().getTime();
	console.log("time taken to push " + l.length + " items to ll: "+ (endTimeToPush - startTimeToPush) + " ms");

	var sort = new Sort();
	// console.log("originalList: "+l.toStringArray());
	var startTimeToSort = new Date().getTime();
	var sortedList = sort.bubbleSort(l, "desc");
	var endTimeToSort = new Date().getTime();
	console.log("time taken to sort " + l.length +" items in ll: "+ (endTimeToSort - startTimeToSort) + " ms");
	// console.log("sortedList: "+sortedList.toStringArray());
})();
*/

/*
// Tests for Quick Sort (Feel free to push 100,000 items to the list and then sort)
(function(){
	var l =  new LinkedList();
	var startTimeToPush = new Date().getTime();
	for (var i = 1000; i > 0; i--){
		l.pushItem(i);
	};
	var endTimeToPush = new Date().getTime();
	console.log("time taken to push " + l.length + " items to ll: "+ (endTimeToPush - startTimeToPush) + " ms");

	var sort = new Sort();
	// console.log("originalList: "+l.toStringArray());
	var startTimeToSort = new Date().getTime();
	var sortedList = sort.quickSort(l, "desc");
	var endTimeToSort = new Date().getTime();
	console.log("time taken to sort " + l.length +" items in ll: "+ (endTimeToSort - startTimeToSort) + " ms");
	// console.log("sortedList: "+sortedList.toStringArray());
})();
*/




/*
===============================================================================================================================================
Analysis #1 (Bubble Sort)
===============================================================================================================================================
				Sort 1,000 								Sort 1,000,000 items
				Expected		Actual  				Expected 								Actual

Bubble Sort 	5000ms => 5s	4824 => 4.8s 			5,000,000,000,000ms =>  158.54 Years 	--

Explanation
-----------
Case 1:
	1000 (items) * 1000 (i) * 1000 (j) => 1,000,000,000 (1 Billion operations)
	The optimized for loop inside the sort function performs nearly 200,000 operations per second with the following hardware
	OS: Linux x86_64 (Ubuntu 12.04)
	Chromium: Version 25.0.1364.160 Ubuntu 12.04 (25.0.1364.160-0ubuntu0.12.04.1) 
	RAM - 8GB
	CPU(s): 8 @ 933.000 MHz
	So, 1 Billion / 200,000 => 5000 ms => 5 seconds
	Actual result was 4824 ms

Case 2:
	Calculate the time taken to sort 1 Million items in the linked list using bubble sort
	1,000,000 (items) * 1,000,000 (j) * 1,000,000 (j) => 1,000,000,000,000,000,000 (I don't know what that is but that's a huge number)
	The optimized for loop inside the sort function performs nearly 200,000 operations per second with the following hardware
	OS: Linux x86_64 (Ubuntu 12.04)
	Chromium: Version 25.0.1364.160 Ubuntu 12.04 (25.0.1364.160-0ubuntu0.12.04.1) 
	RAM - 8GB
	CPU(s): 8 @ 933.000 MHz
	So, 1,000,000,000,000,000,000 / 200,000 => 
	5,000,000,000,000 ms => 5,000,000,000 seconds =>
	83,333,333.33 Minutes => 1,388,888.88 Hours =>
	57,870.37 Days => 158.54 Years
	Never tried it.

Verdict
-------

Best suited for lists with length less than 500


===============================================================================================================================================
Analysis #2 (Quick Sort)
===============================================================================================================================================
							Sort 10,000									Sort 40,000 						Sort 1,000,000 items
						Expected | Actual 							Expected | Actual							Expected | Actual

Quick Sort 		6000 ms => 6 s   | 6714 ms => 6 s 		129000 ms => 129 s   | 1,25,446 ms => 124 s 	1,015 s => 17 min | 1033527 ms => 17 m

*/





