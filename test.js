const country = {"ad": "Andorra",
    "ae": "Emiratos Árabes Unidos",
    "af": "Afganistán",
    "ag": "Antigua y Barbuda",
    "ai": "Anguila",
    "al": "Albania",
    "am": "Armenia",
    "ao": "Angola",
    "aq": "Antártida",
    "ar": "Argentina",
    "as": "Samoa Americana",
    "at": "Austria",
    "au": "Australia",
    "aw": "Aruba",
    "ax": "Åland",
    "az": "Azerbaiyán",
    "ba": "Bosnia y Herzegovina",
    "bb": "Barbados",
    "bd": "Bangladesh",
    "be": "Bélgica",
    "bf": "Burkina Faso",
    "bg": "Bulgaria",
    "bh": "Baréin",
    "bi": "Burundi",
    "bj": "Benín",
    "bl": "San Bartolomé",
    "bm": "Bermudas",
    "bn": "Brunéi"}


function sortA(arr){
    const options = Object.entries(arr).sort(()=> Math.random() - 0.5).slice(0,4);
    const correct = options[0];
    const incorrect = options.slice(1,4)
    console.log(options)
    console.log(correct[1])
    console.log(incorrect)

    return {correct, incorrect}
    //const copie = [...code];
    //const baraja = compileAst.sort(()=> Math.random() - 0.5);
    //return barajado.slice(0,4)
}

sortA(country);