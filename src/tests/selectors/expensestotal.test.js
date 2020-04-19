import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should output total amount for expenses', ()=>{
    const action = selectExpensesTotal(expenses)
    expect(action).toBe(114195)
})


test('should output zero for empty expenses', ()=>{
    const action = selectExpensesTotal([])
    expect(action).toBe(0)
})

test('should output tota for single expense', ()=>{
    const action = selectExpensesTotal([expenses[0]])
    expect(action).toBe(195)
})