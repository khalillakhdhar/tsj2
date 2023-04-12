/**
* Représente une personne.
*/
class Personne {
    /**
    * Crée une nouvelle instance de la classe Personne.
    * @param nom Le nom de la personne.
    * @param age L'âge de la personne.
    * @description Le constructeur de la classe Personne.
    */
    constructor(public nom: string, public age: number) {}
    /**
    * Renvoie une chaîne de caractères représentant la personne.
    * @returns Une chaîne de caractères représentant la personne.
    */
    toString() {
    return `${this.nom} (${this.age} ans)`;
    }}