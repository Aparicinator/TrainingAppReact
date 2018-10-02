const Increment = () => ({
    type: '[COUNTER] Increment'
});

const Decrement = () => ({
    type: '[COUNTER] Decrement'
});

const LoadRequest = () => ({     
    type: '[COUNTER] LoadRequest'
});                              

const LoadSucceeded = () => ({   
    type: '[COUNTER] LoadSucceede'
});                              

const LoadFailed = () => ({      
    type: '[COUNTER] LoadFailed' 
});

export default {
    Increment,
    Decrement,
    LoadRequest,  
    LoadSucceeded,
    LoadFailed   
}