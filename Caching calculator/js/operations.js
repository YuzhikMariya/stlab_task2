const OPERATIONS = {'+': (a, b) => a + b, 
                '-': (a, b) => a - b, 
                '*': (a, b) => a * b, 
                '/': (a, b) => a / b, 
                '^': (a, b) => Math.pow(a, b), 
                'log': (a, b) => Math.log(b) / Math.log(a)
};