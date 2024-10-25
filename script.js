document.getElementById("btnShow").onclick = function() {
    let numSentences = document.getElementById("numRepeats").value;
    let sentence = document.getElementById("sentence").value;
    const tbl = document.createElement("table");

    for(let i = 0; i <= numSentences; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = `${i}. `;
        tr.appendChild(td1);
        let td2 = document.createElement("td");
        td2.textContent = `${sentence}`;
        tr.appendChild(td2);
        tbl.appendChild(tr);
    }

    document.getElementById("results").innerHTML = "";
    document.getElementById("results").appendChild(tbl);
}