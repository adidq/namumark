//replace 정규식 사용예정

function renderTable(data) {
	return(`table rendered ${data}`);
};

function render(raw) {
    const rendered = raw
        .replace(/(.*?)/g, '<span>$1</span>') //문법없음
        // {{{}}}문법
        .replace(/{{{\s(.*?)}}}/g, '<span>$1</span>') //none
        .replace(/{{{\+5\s(.*?)}}}/g, '<span style="font-size:200%">$1</span>') //+5
        .replace(/{{{\+4\s(.*?)}}}/g, '<span style="font-size:180%">$1</span>') //+4
        .replace(/{{{\+3\s(.*?)}}}/g, '<span style="font-size:160%">$1</span>') //+3
        .replace(/{{{\+2\s(.*?)}}}/g, '<span style="font-size:140%">$1</span>') //+2
        .replace(/{{{\+1\s(.*?)}}}/g, '<span style="font-size:120%">$1</span>') //+1
        .replace(/{{{\-1\s(.*?)}}}/g, '<span style="font-size:90%">$1</span>') //-1
        .replace(/{{{\-2\s(.*?)}}}/g, '<span style="font-size:80%">$1</span>') //-2
        .replace(/{{{\-3\s(.*?)}}}/g, '<span style="font-size:70%">$1</span>') //-3
        .replace(/{{{\-4\s(.*?)}}}/g, '<span style="font-size:60%">$1</span>') //-4
        .replace(/{{{\-5\s(.*?)}}}/g, '<span style="font-size:50%">$1</span>') //-5
        //html 
        .replace(/{{{\#!html\s(.*?)}}}/g, '$1')
        //wiki
        .replace(/{{{\#!wiki\s(.*?)}}}/g, '$1')
    return rendered;
};

module.exports = { render };