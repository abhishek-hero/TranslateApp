async function Translate_data() {

    const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
            q: document.getElementById("enter").value,
            source: "en",
            target: document.getElementById("options").value
        }),
        headers: { "Content-Type": "application/json" }
    });


    let result_data = await res.json();
    console.log(result_data)


    document.getElementById("enter").style.background = "white"
    document.getElementById("result").style.background = "rgb(15, 235, 235)"
    document.getElementById("result").value = result_data.translatedText



}