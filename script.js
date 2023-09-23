let http = new XMLHttpRequest();

http.open('get', 'players.json',true);

http.send();
http.onload = function(){

    if (this.readyState==4 && this.status ==200) {
        
        let players = JSON.parse(this.responseText);

        let output = "";

        // let op = "";

        for(let item of players){

            output += `
            <div class="players">
                    <p>${item.name}</p>
                    <p>${item.role}</p>
                    console.log(item);

            `;

        }
        document.querySelector('.players').innerHTML = output;

    }
};