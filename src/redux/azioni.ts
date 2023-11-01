import store from "./store"
import { calcolaStoriaParte } from "./storiaReducer"

import { Allenamento } from "./../types"
import { ItemStoria } from "./storiaReducer"
import { cambiaValoreStress } from "./partiReducer"

export const calcolaStoria = (allenamenti: Allenamento[]) : {ultimoValore: number, nuovaStoria: ItemStoria[]}=>{
	if(allenamenti.length===0){
		
	return {nuovaStoria:[], ultimoValore: 0}
	}
	const today = new Date().getTime()
	let allenamentiOrdinati = allenamenti.slice().sort((allenamento1, allenamento2)=>{
		return allenamento1.data - allenamento2.data
	}).map((allenamento):Allenamento=>{
		let intervallo = Math.floor((today - allenamento.data) / (1000 * 60 * 60 * 24))
		return {data: intervallo, intensita:allenamento.intensita, idParte: allenamento.idParte }
	})

	let max = allenamentiOrdinati[0].data+1
	let storiaVuota = Array(max).fill({data:0, intensita:0} as ItemStoria);

	let intensitaIeri = 0
	let storia = storiaVuota.map((_, index)=>{
		let intensitaOggi = allenamentiOrdinati.filter((allenamento)=>{
			return allenamento.data===max-index-1}).reduce((acc,allenamento)=>{
			acc+=allenamento.intensita
			return acc
		},0)
		let newElem = {
			data: max-index-1,
			intensita : intensitaOggi+intensitaIeri
		}as ItemStoria
		intensitaIeri = Math.floor((intensitaOggi+intensitaIeri)/2 )
		return newElem
	}).reverse()
	return {nuovaStoria:storia, ultimoValore: storia[0].intensita}
}


export const aggiuntaAllenamento = (idParte : number) =>{

	const storia = calcolaStoria( store.getState().allenamenti.value.filter((elem:Allenamento)=>{
		return elem.idParte===idParte
	}))
	store.dispatch(calcolaStoriaParte({idParte, nuovaStoria:storia.nuovaStoria}))
	store.dispatch(cambiaValoreStress({idParte: idParte, nuovoValore: storia.ultimoValore}))
	return 
}

