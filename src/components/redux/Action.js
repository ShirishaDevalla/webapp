export const addItem=(product)=>(
   {
        type:"ADDITEM",
        payload:product,
    }
)
export const delItem=(product)=>(
 {
        type:"DELITEM",
        payload:product,
    }
)