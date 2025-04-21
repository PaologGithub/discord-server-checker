function get_creation_time_from_id(id) {
    const discordEpoch = 1420070400000;
    const timestamp = (BigInt(id) >> 22n) + BigInt(discordEpoch);
    return new Date(Number(timestamp));
}

export { get_creation_time_from_id }