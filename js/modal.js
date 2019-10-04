function playModal(modalID) {
    let modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'close') {
                modal.classList.remove('mostrar');
            };
                
        });
    };
};

let cta = document.querySelector('.baixar');
let cta2 = document.querySelector('.baixar')

cta.addEventListener('click', () => playModal('modal-ebook'));
cta2.addEventListener('click', () => playModal('modal-ebook'));



let form = document.getElementById("form-contato");

if (form.addEventListener) {                   
    form.addEventListener("submit", validaCadastro);
} else if (form.attachEvent) {                  
    form.attachEvent("onsubmit", validaCadastro);
}

function validaCadastro(evt){
	let nome = document.getElementById('nome');
	let email = document.getElementById('email');
	let filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	let contErro = 0;


	/* Validação do campo nome */
	caixa_nome = document.querySelector('.msg-nome');
	if(nome.value == ""){
        $('#nome').css("border-color", "#ff0000");
		caixa_nome.innerHTML = "Favor preencher o Nome";
		caixa_nome.style.display = 'block';
		contErro += 1;
	}else{
		caixa_nome.style.display = 'none';
	}

	/* Validação do campo email */
	caixa_email = document.querySelector('.msg-email');
	if(email.value == ""){
        $('#email').css("border-color", "#ff0000");
		caixa_email.innerHTML = "Favor preencher o E-mail";
		caixa_email.style.display = 'block';
		contErro += 1;
	}else if(filtro.test(email.value)){
		caixa_email.style.display = 'none';
	}else{
		caixa_email.innerHTML = "Formato do E-mail inválido";
		caixa_email.style.display = 'block';
		contErro += 1;
	}	

	if(contErro > 0){
		evt.preventDefault();
	}
}


















// function modalObrigado(modalID) {
//     let modal = document.getElementById(modalID);
//     if (modal) {
//         modal.classList.add('mostrar');
//         modal.addEventListener('click', (e) => {
        
//             if (e.target.id == modalID || e.target.className == 'close') {
//                 modal.classList.remove('mostrar');
//             };
//         });
//     };
// };

// let baixar = document.querySelector('.modal-button');

// baixar.addEventListener('click', () => modalObrigado('modal-thanks'));


// function validaForm(frm) {
// /*
// o parâmetro frm desta função significa: this.form,
// pois a chamada da função - validaForm(this) foi
// definida na tag form.
// */
//     //Verifica se o campo nome foi preenchido e
//     //contém no mínimo três caracteres.
//     if(frm.nome.value == "" || frm.nome.value == null || frm.nome.value.lenght < 3) {
//         //É mostrado um alerta, caso o campo esteja vazio.
//         alert("Por favor, indique o seu nome.");
//         //Foi definido um focus no campo.
//         frm.nome.focus();
//         //o form não é enviado.
//         return false;
//     }
//     //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
//     if(frm.email.value.indexOf("@") == -1 ||
//       frm.email.valueOf.indexOf(".") == -1 ||
//       frm.email.value == "" ||
//       frm.email.value == null) {
//         alert("Por favor, indique um e-mail válido.");
//         frm.email.focus();
//         return false;
//     }
// };




