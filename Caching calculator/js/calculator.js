class CachingCalculator{

    _cache = {};

    _cachedOperations = [];

    registerOperations(operations){
        this._cachedOperations = [];
        operations.forEach(op => {
            this._cachedOperations.push(op);
        });
    }

	calculate(a, b, op) {
        let cacheKey = a + op + b;
        if(this.isCachedOperation(op)){
            let result = this.isCached(a, b, op);
            if (  result ){
                alert("from cache");
            } else {
                result = OPERATIONS[op](a, b);
                this._cache[cacheKey] = result;   
            }
            return result;
        }else{
            return OPERATIONS[op](a, b);
        }
	}


	isCached(a, b, op){
		let result = null;
		let searchedKeys = [a + op + b];

		if (op === '+' || op === '*' ){
			searchedKeys.push(b + op + a);
		}

		for (let key in searchedKeys) {
            result = this._cache[searchedKeys[key]];
			if (result){
				break;
			}
		};

		return result;
    }
    
    isCachedOperation(op){
        let result = false;
        this._cachedOperations.forEach(el => {
            if(el == op){
                result = true;
            }
        });
        return result;
    }
}