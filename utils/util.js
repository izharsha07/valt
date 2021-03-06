const moment = require("moment");
require("moment-duration-format")(moment);

class Util {

    static properCase(str) {
        return str.replace(/([^\W_]+[^\s-]*) */g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }

    static formatDuration(dur) {
        return moment.duration(dur).format(" M [Month(s)], D [Day(s)], H [Hour(s)], m [Minute(s)], s [Second(s)]");
    }

    static cleanText(text, token = process.env.DISCORD_TOKEN) {
        if (typeof text !== "string") text = require("util").inspect(text, { depth: 2 });

        text = text
            .replaceAll("`", "`" + String.fromCharCode(8203))
            .replaceAll("@", "@" + String.fromCharCode(8203))
            .replaceAll(token ?? "", "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0");

        return text;
    }

    static reverse(text) {
        return `${text}`.split("").reverse().join("");
    }

}

module.exports = Util;