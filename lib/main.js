import { fetch_discord_api } from "./fetcher.js";
import { parse_invite_link } from "./invite_link_parser.js";

async function get_data(invite_link) {
    let link_parsed = parse_invite_link(invite_link)

    const discord_api_content = document.getElementById("discord-api-content");

    const data = await fetch_discord_api(link_parsed);
    discord_api_content.textContent = JSON.stringify(data);
};

window.onload = function() {
    const input = document.getElementById("input");
    const button = document.getElementById("button");

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const value = input.value;
            get_data(value);
        };
    });

    button.addEventListener("click", () => {
        const value = input.value;
        get_data(value);
    });
}