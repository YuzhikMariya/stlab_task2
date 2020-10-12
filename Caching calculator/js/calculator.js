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
        if(CachingAlgorithm.isCachedOperation(op, this._cachedOperations)){
            return CachingAlgorithm.cache(a, b, op, this._cache);
        }else{
            return OPERATIONS[op](a, b);
        }
	}


	
}