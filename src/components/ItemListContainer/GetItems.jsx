export default function GetItems(){
    return new Promise((resolve, reject)=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}