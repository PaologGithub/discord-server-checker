async function fetch_discord_api(invite_link) {
    let server_data;

    const text_content = await fetch(`https://discordapp.com/api/v6/invites/${invite_link}`);
    server_data = await text_content.json();
    
    return server_data;
}

export { fetch_discord_api }