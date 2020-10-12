class CachingAlgorithm{
    static isCached(a, b, op, cache){
		let result = null;
		let searchedKeys = [a + op + b];
		if (op === '+' || op === '*' ){
			searchedKeys.push(b + op + a);
		}
		for (let key in searchedKeys) {
            result = cache[searchedKeys[key]];
			if (result){
				break;
			}
		};
		return result;
    }
    
    static isCachedOperation(op, cachedOperations){
        let result = false;
        cachedOperations.forEach(el => {
            if(el == op){
                result = true;
            }
        });
        return result;
    }

    static cache(a, b, op, cache){
        let cacheKey = a + op + b;
        let result = this.isCached(a, b, op, cache);
        if(!result){
            result = OPERATIONS[op](a, b);
            cache[cacheKey] = result;   
        }
        return result;
    }
}