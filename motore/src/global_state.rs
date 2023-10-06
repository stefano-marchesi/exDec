
use wasm_bindgen::prelude::*;
use serde_wasm_bindgen::*;
use std::collections::HashMap;
use std::sync::atomic::{AtomicUsize, Ordering};
use serde::{Serialize, Deserialize};
pub mod parti;
use parti::*;


#[wasm_bindgen]
pub fn get_id() -> usize {
    static COUNTER:AtomicUsize = AtomicUsize::new(1);
    COUNTER.fetch_add(1, Ordering::Relaxed)
}

#[derive(Default, Clone, Debug, Serialize, Deserialize)]
pub struct GlobalState {
    pub parti: HashMap<usize, ParteCorpo>,
}

impl GlobalState {
    pub fn new() -> GlobalState {
        GlobalState::default()
    }
    pub fn aggiungiParte(&mut self, id:usize, nuovaParte: ParteCorpo ) {
        self.parti.insert(id, nuovaParte);
    }
}


#[wasm_bindgen]
pub fn get_state ()->Result<JsValue, JsValue>{
    let newState = GlobalState::new();
    Ok(serde_wasm_bindgen::to_value(&newState)?)
}
