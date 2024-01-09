export function validaFloat(valor, nomeCampo) {
    if (/^-?\d*,?\.?\d*$/.test(valor) || !valor) {
        return ''
    }
    return 'o campo: ' + nomeCampo + ' não está no formato de um número,'
}

export function validaInt(valor, nomeCampo) {
    if (/^-?\d*$/.test(valor) || !valor) {
        return ''
    }
    return 'o campo: ' + nomeCampo + ' não está no formato de um número inteiro,'
}

export function validaPreenchido(valor, nomeCampo) {
    if (valor) {
        return ''
    }
    return 'o campo: ' + nomeCampo + ' não foi preenchido,'
}

export function validaEmail(valor) {
    if(/.*@.*\..*/.test(valor)) {
        return ''
    }
    return 'o campo: email, não está preenchido no formato correto,'
}

export function validaTamanho(valor, nomeCampo, tamanho) {
    if(valor.length <= tamanho) {
        return ''
    }
    return 'o campo: ' + nomeCampo + ' tem tamanho maior que o esperado (' + tamanho + '),'
}

