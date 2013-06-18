(function(){
	Sort = function(){
		var t = this;
		t.bubbleSort = function(ds, dir){
			var i = 0, j, len = ds.length;
			if(dir === "desc"){
				for(; i < len; i++){
					for(j = i; j < len; j++){
						var predecessor = ds.getItemAt(i);
						var successor = ds.getItemAt(j);
						if(predecessor < successor){
							ds.replaceItemAt(successor, i);
							ds.replaceItemAt(predecessor, j);
						}
					}
				}
			}else{
				for(; i < len; i++){
					for(j = i; j < len; j++){
						var predecessor = ds.getItemAt(i);
						var successor = ds.getItemAt(j);
						if(predecessor > successor){
							ds.replaceItemAt(successor, i);
							ds.replaceItemAt(predecessor, j);
						}
					}
				}
			}
			return ds;
		};

		q_block = function(ds, l, r){
			var p = ds.getItemAt(Math.floor((l+r)/2));
			var i = l, j = r, predecessor, successor;
			while(i <= j){
				while(ds.getItemAt(i) < p){
					i++;
				}
				while(ds.getItemAt(j) > p){
					j--;
				}
				if (i <= j){
					predecessor = ds.getItemAt(i);
					successor = ds.getItemAt(j);
					ds.replaceItemAt(successor, i);
					ds.replaceItemAt(predecessor, j);
					i++;
					j--;
				}
			}
			return i;
		};

		t.quickSort = function(ds, l, r){
			var index, len = ds.length;
			l = l || 0;
			r = r || len-1;
			if (len > 1) {
				index = q_block(ds, l, r);
				if (l < index-1){
					t.quickSort(ds, l, index-1);
				}
				if (index < r){
					t.quickSort(ds, index, r);
				}
			}
			return ds;
		};
	};
})();