import { words } from "./words.js"

export function getRandomWord()
{
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
}


export function getFarewellText(language)
{
    const options = [
        `It's giving... goodbye, ${language}`,
        `No cap, ${language} just dipped`,
        `${language} got ratioed by life`,
        `${language} is officially out of pocket`,
        `${language} got clapped 😔`,
        `Bruh moment: ${language} is gone`,
        `F in the chat for ${language}`,
        `Pack it up, ${language}, you're done`,
        `${language} just yeeted out of existence`,
        `RIP bozo: ${language}`,
        `Not the ${language} slander 😭`,
        `${language}, it’s giving... deceased`,
        `${language} said "I'mma head out"`,
        `${language}, consider yourself canceled`,
        `Oop, ${language} just ghosted`,
        `${language} went ✨ to the void ✨`,
        `Certified ${language} L`,
        `${language} hit the alt+F4 combo`,
        `Press X to doubt ${language}'s survival`,
        `${language}, you're done. You're done.`,
        `${language} logged out... permanently`,
        `A moment of silence for ${language}, fr fr`,
        `Sheesh, ${language} got nerfed`,
        `That's tough, ${language}. Skill issue?`,
        `Lowkey, ${language} fell off`,
        `L ${language} didn't survive`,
        `${language} got hard carried to the grave`,
        `GG, ${language}. Easy claps.`,
        `404: ${language} not found (anymore)`,
        `${language} got outplayed, no diff`,
        `Gone like a Snapchat streak, ${language}`,
        `Skill issue detected: ${language}`,
        `🚨 ${language} was ejected (sus) 🚨`,
        `Oops, ${language} got uninstalled`,
        `Wasted. (${language})`,
        `💀 ${language} really said: "Peace out, fam"`,
        `${language} went from hero to zero real quick`,
        `No update patch for ${language}. Game over.`,
        `Catch ya in the next life, ${language}`,
        `Sorry, ${language}, you don't have plot armor`,
        `${language} was just an NPC all along`,
        `${language} didn't pass the vibe check`,
        `Another one bites the dust: ${language}`,
        `${language} went AFK and never came back`,
        `It is what it is. ${language} is gone.`,
        `${language} just got ratioed IRL`,
        `${language} got outskilled and outhustled`,
        `LMAO, ${language} just rage-quit`,
        `Not the ${language} diff... tragic`,
        `Alt+F4 for ${language}. Fr, no printer.`,
        `${language} got absolutely folded`,
        `Rare ${language} L spotted in the wild`,
        `Bruh, ${language} really just soft-locked`,
        `${language} got caught lacking in 4K`,
        `Rip ${language}, you will not be missed (jk)`,
        `This ain't it, ${language}. Big yikes.`,
        `Get good, ${language}. Too late now tho.`,
        `${language} said “bye Felicia”`,
        `${language} is running on vibes... and nothing else`,
        `Ayo ${language}, this is not your arc`,
        `Certified hood classic: ${language}'s downfall`,
        `Big F for ${language}, it's a wrap`,
        `Sleep tight, ${language}. Or don’t.`,
        `Say psych rn, ${language}. Oh wait.`,
        `Rare ${language} W, wait no... it's an L`,
        `${language}, you just got one-tapped`,
        `Pop off, ${language}... straight to the shadow realm`,
        `${language} entered the chat... and left immediately`,
        `Unlucky, ${language}. Better luck next patch.`,
        `The grind was not real for ${language}`,
        `${language} just rage-alt-tabbed IRL`,
        `That's a wrap for ${language}. Roll credits.`,
        `${language} couldn't even clutch it`,
        `Down bad for ${language}. Rip bozo.`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
