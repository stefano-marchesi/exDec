mod utils;
mod global_state;
use wasm_bindgen::prelude::*;



#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}



    

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, motore!");
}

#[wasm_bindgen(start)]
pub fn main(){
    
}
