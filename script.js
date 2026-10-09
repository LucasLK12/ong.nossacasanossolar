const aplicar=(id,fn)=>{const c=document.getElementById(id);if(c)c.addEventListener('input',()=>{c.value=fn(c.value.replace(/\D/g,''))})};
aplicar('cpf',v=>v.slice(0,11).replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2'));
aplicar('telefone',v=>v.slice(0,11).replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d{1,4})$/,'$1-$2'));
aplicar('cep',v=>v.slice(0,8).replace(/(\d{5})(\d{1,3})$/,'$1-$2'));

// Eu Lucas vieira, fiz esse site usando o conhecimento das aulas de qurata feira, porem tive dificuldade com css e o javascript e ultilizei IA para entender como se fazia //
//tive uns erros de digitacao e percebi que por uma letra errrada que tenha em qualquer lugar que faz vai atrapalhar a entrar em qualquer tipo de outra pagina como a do cadastro que eu errei uma letra e fui fazer o restante, mas nao estava conseguindo abrir ela dentro do site, pois tava dado como uma arquivo que nao existia, euu fui e revisei e corrigi o erro e entrou depois certinho//
//criei uma pasta para colocar a fotos tudo junto eu acho que erra para ter feito antes ao inves de jogar assim dessa forma espalhada//