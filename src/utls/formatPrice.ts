const CURRRENCY_FORMATTER = new Intl.NumberFormat(undefined,{
    currency:"INR",
    style:"currency"

})

export function formatCurrency(price:number){
    return CURRRENCY_FORMATTER.format(price)
}