
use wasm_bindgen::prelude::*;
use std::sync::atomic::{AtomicUsize, Ordering};
use serde::{Serialize, Deserialize};



fn get_id() -> usize {
    static COUNTER:AtomicUsize = AtomicUsize::new(1);
    COUNTER.fetch_add(1, Ordering::Relaxed)
}


#[derive(Default, Clone, Debug, Serialize, Deserialize)]
#[wasm_bindgen]
pub struct ParteCorpo {
    nome: String,
    categoria: String,
    stress: i32
}


    #[wasm_bindgen]
impl ParteCorpo {
    #[wasm_bindgen(getter)]
    pub fn new() -> ParteCorpo {
        let new_el: ParteCorpo = ParteCorpo::default(); 
        new_el
    } 

}
    

