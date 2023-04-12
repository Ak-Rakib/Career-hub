// Add Data to local storage

const addToDb = id => {
    let appliedJob = {};

// get previous data from local storage
const storedCart = localStorage.getItem('appliedJob');
if(storedCart){
    appliedJob = JSON.parse(storedCart);
}

// add quantity 
const quantity = appliedJob[id]
if(quantity){
    const newQuantity = quantity + 1;
    appliedJob[id] = newQuantity;
} else {
    appliedJob[id] = 1;
}

localStorage.setItem('appliedJob', JSON.stringify(appliedJob));
}

// Get stored data from cart

const getStoredCart = () => {
    let appliedJob = {}

// Get previous Data from local storage
const storedCart = localStorage.getItem('appliedJob');
if(storedCart){
    appliedJob = JSON.parse(storedCart);
}

return appliedJob;
}

export  {addToDb , getStoredCart}