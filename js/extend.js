// 把后面所有的对象属性依次copy给第一个对象
function extend() {
	var arg = arguments, argLen = arg.length;
	var target = arg[0];
	
	// 从下标1开始遍历arguments，把遍历到的每个对象属性依次copy给target对象
	for(var i = 1; i < argLen; i++) {
		for(var key in arg[i]) {
			
			// 只把对象自己的属性copy给target
			if(arg[i].hasOwnProperty(key)) {
				target[key] = arg[i][key];
			}
		}
	}
	
	return target;
}
