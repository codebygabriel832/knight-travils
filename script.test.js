const {knightMoves} = require('./script.js')

describe('knightMoves', () =>{
    test('should return shortest path when start equals end', () => {
        const path = knightMoves([0,0], [0,0])
        expect(path).toEqual([[0,0]])
    })
    
    test('should return shortest path from [0,0] to [1,2]', () =>{
        const path = knightMoves([0,0], [1,2]) 
        expect(path).toEqual([[0,0],[1,2]])
    })
    test('should return valid path from [0,0] to [3,5]', () => {
        const path = knightMoves([0,0],[3,5])
        expect(path[0]).toEqual([0,0])
        expect(path[path.length - 1 ]).toEqual([3,5])
    })
    test('should return invalid if path does not exist', ()=> {
        const path = knightMoves([0,0],[8,8])
        expect(path).toBeUndefined()
    })
}) 
