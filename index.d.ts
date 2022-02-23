declare module "num-words-de" {
    function numToWord(
        number: number,
        params?: NumToWordParams
    ): string;
    export{
        numToWord
    }
}

interface NumToWordParams {
    uppercase?: boolean,
    indefinite_eine?: boolean,
    indefinite_einer?: boolean,
    indefinite_eines?: boolean,
    indefinite_einem?: boolean,
    indefinite_ein?: boolean
}
