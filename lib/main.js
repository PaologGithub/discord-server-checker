import { fetch_discord_api } from "./fetcher.js";
import { parse_invite_link } from "./invite_link_parser.js";
import { parse_discord_data } from "./parser.js";
import { display_data, display_full_response } from "./data_displayer.js"

async function get_data(invite_link) {
    let link_parsed = parse_invite_link(invite_link)

    display_full_response(`https://discordapp.com/api/v6/invites/${link_parsed}`);

    const data = await fetch_discord_api(link_parsed);
    const data_parsed = parse_discord_data(data);
    display_data(data_parsed);
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