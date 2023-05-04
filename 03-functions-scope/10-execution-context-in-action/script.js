//Memory creation PHASE
//1: Create a global object(browser = window, Nodejs = global)
//2: Create the "this" object & bind it to global object
//3: Setup memory heap for storing variables & function refrences
//4: Store functions & variables in global execution context & set to "undefined"

//EXECUTION PHASE
//1: Execute code line by line
//2: Create new EC for every function call