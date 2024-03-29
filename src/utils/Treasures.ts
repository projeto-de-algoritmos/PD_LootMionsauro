export interface Treasure {
    image: string;
    value: number;
    weight: number;
}

export const Treasures: Treasure[] = [
    { image: 'Ancient_Liche_Bone.gif', value: 9, weight: 6 },
    { image: 'Ancient_Tiara.gif', value: 18, weight: 10 },
    { image: 'Arboreal_Tome.gif', value: 15, weight: 9 },
    { image: 'Arcanomancer_Folio.gif', value: 16, weight: 9 },
    { image: 'Arcanomancer_Regalia.gif', value: 20, weight: 10 },
    { image: 'Arcanomancer_Sigil.gif', value: 35, weight: 5 },
    { image: 'Axe_of_Mayhem_(Overcharged).gif', value: 30, weight: 25 },
    { image: 'Blade_of_Destruction.gif', value: 50, weight: 20 },
    { image: 'Blessed_Sceptre.gif', value: 50, weight: 15 },
    { image: 'Bow_of_Destruction.gif', value: 50, weight: 14 },
    { image: 'Chaos_Critical_Dice.gif', value: 15, weight: 5 },
    { image: 'Chopper_of_Destruction.gif', value: 50, weight: 25 },
    { image: 'Collar_of_Green_Plasma.gif', value: 20, weight: 4 },
    { image: 'Collar_of_Red_Plasma.gif', value: 20, weight: 4 },
    { image: 'Crossbow_of_Destruction.gif', value: 50, weight: 16 },
    { image: 'Crown_Armor.gif', value: 84, weight: 40 },
    { image: 'Crown.gif', value: 47, weight: 10 },
    { image: 'Crunors_Heart.gif', value: 22, weight: 3 },
    { image: 'Enchanted_Blister_Ring.gif', value: 42, weight: 5 },
    { image: 'Enchanted_Pendulet.gif', value: 28, weight: 6 },
    { image: 'Exalted_Core.gif', value: 11, weight: 7 },
    { image: 'Falcon_Circlet.gif', value: 33, weight: 12 },
    { image: 'Flames_of_the_Percht_Queen.gif', value: 8, weight: 3 },
    { image: 'Frozen_Heart.gif', value: 10, weight: 7 },
    { image: 'Giant_Amethyst.gif', value: 25, weight: 10 },
    { image: 'Giant_Emerald.gif', value: 25, weight: 10 },
    { image: 'Giant_Ruby.gif', value: 25, weight: 10 },
    { image: 'Giant_Sapphire.gif', value: 25, weight: 10 },
    { image: 'Giant_Topaz.gif', value: 25, weight: 10 },
    { image: 'Gilded_Blessed_Shield.gif', value: 88, weight: 39 },
    { image: 'Gilded_Crown.gif', value: 77, weight: 15 },
    { image: 'Gold_Cup_(Valour).gif', value: 61, weight: 37 },
    { image: 'Gold_Ingot.gif', value: 20, weight: 10 },
    { image: 'Golden_Boots.gif', value: 55, weight: 18 },
    { image: 'Golden_Prison_Key.gif', value: 5, weight: 4 },
    { image: 'Golden_Warlord_Sword.gif', value: 100, weight: 30 },
    { image: 'Grand_Sanguine_Bow.gif', value: 40, weight: 14 },
    { image: 'Grand_Sanguine_Crossbow.gif', value: 40, weight: 16 },
    { image: 'Grand_Sanguine_Hatchet.gif', value: 40, weight: 25 },
    { image: 'Grand_Sanguine_Razor.gif', value: 40, weight: 20 },
    { image: 'Lion_Plate.gif', value: 69, weight: 40 },
    { image: 'Mace_of_Destruction.gif', value: 50, weight: 23 },
    { image: 'Mathmaster_Shield.gif', value: 31, weight: 27 }, // TT e
    { image: 'Pair_of_Soulstalkers.gif', value: 17, weight: 11 },
    { image: 'Pair_of_Soulwalkers.gif', value: 18, weight: 11 },
    //{ image: 'Pantibian_Amphora.gif', value: 24, weight: 16 },
    { image: 'Ring_of_Green_Plasma.gif', value: 15, weight: 3 },
    { image: 'Ring_of_Red_Plasma.gif', value: 15, weight: 3 },
    { image: 'Sanguine_Greaves.gif', value: 40, weight: 20 },
    { image: 'Shield_of_Destiny.gif', value: 65, weight: 35 },
    { image: 'Soulbleeder.gif', value: 30, weight: 12 },
    { image: 'Soulcutter.gif', value: 30, weight: 20 },
    { image: 'Souleater_(Axe).gif', value: 30, weight: 25 },
    { image: 'Soulmantle.gif', value: 30, weight: 15 },
    { image: 'Soulshanks.gif', value: 30, weight: 14 },
    { image: 'Soulshell.gif', value: 30, weight: 20 },
    { image: 'Soulstrider.gif', value: 30, weight: 14 },
    { image: 'Soultainter.gif', value: 30, weight: 23 },
    { image: 'Spellbook_of_Ancient_Arcana.gif', value: 17, weight: 10 },
    { image: 'Supreme_Health_Potion.gif', value: 5, weight: 6 },
    { image: 'The_Cobra_Amulet.gif', value: 15, weight: 5 },
    { image: 'The_Epic_Wisdom.gif', value: 13, weight: 7 },
    { image: 'Umbral_Master_Spellbook.gif', value: 10, weight: 8 },
    { image: 'Winged_Boots.gif', value: 10, weight: 10 },
];

export const getRandomLoot = (loot: number): Treasure[] => {
    const drops = loot;
    const randomLoot: Treasure[] = [];

    while (randomLoot.length < drops) {
        const randomIndex = Math.floor(Math.random() * Treasures.length);
        const treasure = Treasures[randomIndex];

        if (!randomLoot.includes(treasure)) {
            randomLoot.push(treasure);
        }
    }

    return randomLoot;
};
