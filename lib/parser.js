import { get_creation_time_from_id } from "./time_api.js";

// From guild
let server_data_skeleton = {
    name: "",             // name value
    id: 0,                // id value
    creation_date: "",    // no real value, need to calculate from the id
    description: "",      // description value
    features: [],         // features value 
    nsfw: false,          // nsfw value
    premium_count: 0,     // premium_subscription_count value
    premium_level: 0      // premium_tier value
};

// From inviter
let inviter_data_skeleton = {
    name: "",             // global_name value
    username: "",         // username value
    id: 0,                // id value
    creation_date: "",    // no real value, need to calculate from the id
    avatar_url: ""        // from avatar value, need to do a little bit of things
}

// From channel
let welcome_channel_skeleton = {
    name: "",             // name value
    id: 0,                // id value
    creation_date: ""     // no real value, need to calculate from the id
}

// From root
let invite_code_skeleton = {
    code: "",             // code value
    expiration_date: ""   // expires_at value, need to parse   
}


function parse_discord_data(discord_data) {

    let server_data = parse_server_data(discord_data["guild"]);
    let inviter_data = parse_inviter_data(discord_data["inviter"]);
    let welcome_channel_data = parse_welcome_channel(discord_data["channel"]);
    let invite_code_data = parse_invite_code(discord_data);

    return [server_data, inviter_data, welcome_channel_data, invite_code_data];
}

export { parse_discord_data }

function parse_server_data(server_data) {
    // Make a copy of the data without modifying the skeleton
    let data = JSON.parse(JSON.stringify(server_data_skeleton));

    data.name = server_data["name"];
    data.id = server_data["id"];
    data.creation_date = get_creation_time_from_id(server_data["id"]);
    data.description = server_data["description"];
    data.features = server_data["features"];
    data.nsfw = server_data["nsfw"];
    data.premium_count = server_data["premium_subscription_count"];
    data.premium_level = server_data["premium_tier"];

    return data;
}

function parse_inviter_data(inviter_data) {
    let data = JSON.parse(JSON.stringify(inviter_data_skeleton));

    data.name = inviter_data["global_name"];
    data.username = inviter_data["username"];
    data.id = inviter_data["id"];
    data.creation_date = get_creation_time_from_id(inviter_data["id"]);
    data.avatar_url = `https://cdn.discordapp.com/avatars/${inviter_data["id"]}/${inviter_data["avatar"]}.png`;

    return data;
}

function parse_welcome_channel(welcome_channel_data) {
    let data = JSON.parse(JSON.stringify(welcome_channel_skeleton));

    data.name = welcome_channel_data["name"];
    data.id = welcome_channel_data["id"];
    data.creation_date = get_creation_time_from_id(welcome_channel_data["id"]);

    return data;
}

function parse_invite_code(discord_data) {
    let data = JSON.parse(JSON.stringify(invite_code_skeleton));

    data.code = discord_data["code"];
    data.expiration_date = Date(Date.parse(discord_data["expires_at"]));

    return data;
}