const relogio = document.querySelector(".relogio")
const dataView = document.querySelector(".data")

setInterval(() => {
	const data = new Date()
	const hora = addZero(data.getHours())
	const min = addZero(data.getMinutes())
	const seg = addZero(data.getSeconds())

	const dia = addZero(data.getDate())
	const mes = addZero(data.getMonth() + 1)
	const ano = addZero(data.getFullYear())

	relogio.innerHTML = `${hora}:${min}:${seg}`
	dataView.innerHTML = `${dia}/${mes}/${ano}`
})
function addZero(num) {
	return num >= 10 ? num : `0${num}`
}
