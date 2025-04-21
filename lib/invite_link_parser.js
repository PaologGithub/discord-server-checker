function parse_invite_link(invite_link) {
    const match = invite_link.match(/^(?:https?:\/\/)?(?:www\.)?(?:discord(?:app)?\.com\/invite\/|discord\.gg\/)?([a-zA-Z0-9\-]+)$/);
    return match ? match[1] : null;
}

export { parse_invite_link }