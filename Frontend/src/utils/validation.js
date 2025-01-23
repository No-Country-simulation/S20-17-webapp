export const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/
    return regex.test(password)
}

export const validateEmail = (email) => {
    /*
        Es importante tener en cuenta que no cubre todos los casos posibles y específicos definidos por
            los estándares de correos electrónicos (RFC 5322), pero es adecuado para la mayoría de los
            propósitos comunes.
        */

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    /* 
            Desglose de la Expresión Regular
                ^: Comienzo de la línea.
                [^\s@]+: Uno o más caracteres que no son espacios en blanco ni '@'.
                @: Exactamente un símbolo '@'.
                [^\s@]+: Uno o más caracteres que no son espacios en blanco ni '@'.
                \.: Exactamente un punto '.'.
                [^\s@]+: Uno o más caracteres que no son espacios en blanco ni '@'.
                $: Fin de la línea.
        */

    return regex.test(email)
}
