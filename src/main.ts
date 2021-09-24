
interface StatModifier {
    stat:number
    modifier:number
}

interface AbilityScoresAndModifier {
    strengh: StatModifier
    dexterity: StatModifier
    constitution: StatModifier
    intelligence: StatModifier
    wisdom: StatModifier
    charisma: StatModifier
 }

interface ClassLevel {
    className: string
    level: number
}

interface CharacterInfo {
    characterName: string
    playerName: string
    classLevel: ClassLevel[]
    race: string
    background: string
    experiencePoints: number
}

interface CharacterSheet {
    characterInfo: CharacterInfo
    abilityScoresAndModifier: AbilityScoresAndModifier
}
