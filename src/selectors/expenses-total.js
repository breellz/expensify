export default (expenses)=>{
        return expenses
        .map((expense)=> expense.amount)
        .reduce((total, current)=>total+current,0)
    }


