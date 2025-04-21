function display_data(data) {
    display_server_data(data[0]);
    display_inviter(data[1]);
    display_channel(data[2]);
    display_invite(data[3]);
}

function display_full_response(api_link) {
    let iframe = document.createElement("iframe");
    iframe.src = api_link;
    document.getElementById("full-response").appendChild(iframe);
}

export { display_data, display_full_response }

function display_server_data(data) {
    display_data_hive(data, "server")
}

function display_inviter(data) {
    display_data_hive(data, "inviter")
}

function display_channel(data) {
    display_data_hive(data, "channel")
}

function display_invite(data) {
    display_data_hive(data, "invite")
}

function display_data_hive(data, div_id) {
    let div = document.getElementById(div_id);
    for (let [key, value] of Object.entries(data)) {
        if (typeof value === "string" && value.endsWith(".png")) {

            let image = document.createElement("img");
            image.src = value;
            div.appendChild(image)

        } else {

            let text = document.createElement("p");
            text.textContent = `${key}: ${value}`;
            div.appendChild(text);
        
        }
    }
}