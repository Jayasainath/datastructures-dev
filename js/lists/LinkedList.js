(function(){
	LinkedList = function(){
		var t = this;
		t.head = null;
		t.length = 0;
		t.tail = null;

		// Retreives
		t.getfirstItem = function(){
			return this.length > 0 ? t.head.data : null;
		};

		// IMPROVE ME, PLEASE
		t.getItemAt = function(index){ 
			if(index > -1 && index < t.length){
				var current = t.head, i = 1;
				if(index === 0){
					return t.head.data;
				}else{
					for(; i < t.length; i++){
						current = current.next;
						if(i === index){
							return current.data;				
						}
					}
				}
			}else{
				return null;
			}
		};

		t.getLastItem = function(){
			return t.length > 0 ? t.tail.data : null;
		};

		// Setters
		t.unShiftItem = function(item){
			var node = { data: item, next: null };
			// node.next = t.tail ? (t.head) : (t.tail = t.head);
			if(!t.tail){
				node.next = t.tail = t.head;	
			}else{
				node.next = t.head;
			}
			
			t.head = node;
			t.length++;
		}

		// IMPROVE ME, PLEASE
		t.insertItemAfter = function(item, index){
			var node = {data: item, next: null}, current, i = 0;
			if(t.length > 0){
				if(index > -1 && index < t.length){
					if(index === t.length-1){
						t.pushItem(item);
					}else{
						current = t.head;
						for(; i < t.length; i++){
							if(i === index){
								node.next = current.next;
								current.next = node;
								t.length++;
								break;
							}else{
								current = current.next;
							}
						}
					}
				}
			}
		};

		t.pushItem = function(item){
			var node = { data: item, next: null };
			if(t.head === null){
				t.head = t.tail = node;
			}else{
				t.tail.prev = node;
				t.tail.next = node;
				t.tail = t.tail.next;
			}
			t.length++;

			// pushing 100000 items takes nearly 17 ms compared to 63 seconds in the previous commit
			// Hardware used =>
			// OS: Linux x86_64 (Ubuntu 12.04)
			// Chromium: Version 25.0.1364.160 Ubuntu 12.04 (25.0.1364.160-0ubuntu0.12.04.1) 
			// RAM - 8GB
			// CPU(s): 8 @ 933.000 MHz
		};


		// Destroyers
		t.shiftItem = function(){
			if(t.length > 0){
				t.head = t.head.next;
				t.length--;
			}
		};

		// IMPROVE ME, PLEASE
		t.removeItemAt = function(index){
			// check for length;
			var current, previous, i = 1;
			if(index > -1 && index < t.length){
				current = t.head;
				if(index === 0){
					t.head = current.next;
				}else{
					for(; i < t.length; i++){
						previous = current;
						current = current.next;
						if(i === index){
							current = current.next;
							previous.next = current;
						}
					}
				}
				t.length--;
			}else{
				return null;
			}
		};
		
		t.popItem = function(){
			if(t.length > 0){
				var current = previous = t.head;
				if(t.length === 1){
					t.head = null;
				}else{
					while(current.next){
						previous = current;
						current = current.next;
					}
					previous.next = null;
				}
				t.length--;
			}
		};


		// Helpers
		t.getLength = function(){
			return t.length;
		};

		t.toArray = function(){
			if(t.length > 0){
				var array = [], current = this.head, i=0;
				while(i < t.length){
					array.push(current.data);
					current = current.next;
					i++;
				}
				return array;
			}else{
				return [];
			}
		};

		t.toJSON = function(){
			if(t.length > 0){
				var current = t.head, i=0, json_arr = [], tempObject;
				while(i++ < t.length){
					tempObject = {};
					tempObject.data = current.data;
					current = current.next;
					json_arr.push(tempObject);
				}
			}
			return json_arr;
		};

		t.toStringArray = function(){
			return t.toArray().toString();
		}

		// IMPROVE ME, PLEASE
		t.reverseList = function(){
			if(t.length > 0){
				var l = new LinkedList(), reversedArray = [], current = t.head;
				while(current.next){
					l.unShiftItem(current.data);
					current = current.next;
				}
				current.next = l.head;
				return current;
			}
		};

		// To implement

		/*
		sort();
		splice(from, to);
		slice(from, to);
		*/
	};
})();