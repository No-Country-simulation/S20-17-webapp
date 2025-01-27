export const regexFormPatterns = {
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/gm,
    // password: /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%^&+=!]).{8,}$/,

    /*
        Desglose de la Expresión Regular:
            ^: Comienzo de la línea.
            (?=.*\d): Asegura que haya al menos un dígito (0-9).
            (?=.*[a-z]): Asegura que haya al menos una letra minúscula (a-z).
            (?=.*[A-Z]): Asegura que haya al menos una letra mayúscula (A-Z).
            (?=.*[@#$%^&+=!]): Asegura que haya al menos un carácter especial 
                (de los siguientes: @, #, $, %, ^, &, +, =, !).
            .{8,}: Asegura que la contraseña tenga al menos 8 caracteres en total.
            $: Fin de la línea.
        Opciones:
            g: Búsqueda global (puede coincidir en múltiples líneas si es necesario).
            m: Modo multilínea (permite que ^ y $ coincidan al inicio y final de cada línea).
    */

    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

    /*
        Es importante tener en cuenta que no cubre todos los casos posibles y específicos definidos por
        los estándares de correos electrónicos (RFC 5322), pero es adecuado para la mayoría de los
        propósitos comunes.
        
        Desglose de la Expresión Regular
            ^: Comienzo de la línea.
            [^\s@]+: Uno o más caracteres que no son espacios en blanco ni '@'.
            @: Exactamente un símbolo '@'.
            [^\s@]+: Uno o más caracteres que no son espacios en blanco ni '@'.
            \.: Exactamente un punto '.'.
            [^\s@]+: Uno o más caracteres que no son espacios en blanco ni '@'.
            $: Fin de la línea.
    */
}
