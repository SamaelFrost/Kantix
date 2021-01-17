// JavaScript source code

/*Variables data
var matterRelatedData = { //Variables de la mati�re
    matterPerClick: 0,
    matter: 200,
    replicator: 0,
    replicatorLevel: 0,
    replicatorUpgradeLevel: 0,
    storageLevel: 0,
    repUpgradeCost: 100,
    maxStorage: 200
}
var antimatterData = {
    antimatter: 0,
    antimatterCost: 1000, 
    antimatterPerClick: 0,
    maxStorage: 10,
    storageLevel: 0
}

//Function
function antimatterClick(number) {
    if (antimatterData.antimatter < antimatterData.maxStorage) {
        if (matterRelatedData.matter >= antimatterData.antimatterCost) {
            antimatterData.antimatter += number
            matterRelatedData.matter -= antimatterData.antimatterCost
        }
    }
    if (antimatterData.antimatter >= antimatterData.maxStorage) {
        antimatterData.antimatter = antimatterData.maxStorage
    }
    document.getElementById("antimatter").innerHTML = antimatterData.antimatter
}

function matterClick(number) { //Fonction de clic
    if (matterRelatedData.matter < matterRelatedData.maxStorage) {//Si la qt� de matter est en dessous de la cap de stockage alors
        matterRelatedData.matter += number //incremente la matter par la valeur de number (� d�faut renseign� � 1 dans l'HTML)
    }
    if (matterRelatedData.matter > matterRelatedData.maxStorage) {//si la matter d�passe la valeur de stockage alors
        matterRelatedData.matter = matterRelatedData.maxStorage//blocque la qt� de matter � laa valeur de stoockage
    }
    matterRelatedData.matterPerClick = matterRelatedData.replicator * Math.pow(2, matterRelatedData.replicatorUpgradeLevel) //calcul la g�n�ration de matter par click ( pour le moment, nb de rep par 2 exponent upgLvl )
    document.getElementById("matter").innerHTML = matterRelatedData.matter//actualise la matter dans l'HTML
    document.getElementById("maxMatter").innerHTML = matterRelatedData.maxStorage
}

function buttonVisibility() {
    if (matterRelatedData.matter >= 25) {
        document.getElementById("storage").style.display = "initial"
    }
    if (matterRelatedData.matter >= 100) {
        document.getElementById("repUpgrade").style.display = "initial"
    }
}

function resourcesVisibility() {
    if (matterRelatedData.matter >= 1000) {
        document.getElementById("antimatterPhase").style.display = "initial"
    }
}

function buyReplicator() { //fonction achat de batiment au moment du clic
    var replicatorCost = Math.floor(10 * Math.pow(1.1, matterRelatedData.replicatorLevel)) //Cr�er le prix d'un replicator ( la premi�re fois, 10)
    if (matterRelatedData.matter >= replicatorCost) { //Si la matter est plus grande ou �gale au prix d'un replicator
        matterRelatedData.replicatorLevel += 1 //ajoute 1 niveau de replicator
        matterRelatedData.replicator += 0.5//Ajoute � la production des replicators
        matterRelatedData.matter -= replicatorCost; //enleve le prix du replicator au stock de matter actuel
        document.getElementById("replicators").innerHTML = matterRelatedData.replicatorLevel //dans l'HTML, le nb de replicator �quivaut au nb du script
        document.getElementById("matter").innerHTML = matterRelatedData.matter //dans l'HTML, le nb de matter �quivaut au nb du script
        var nextCost = Math.floor(10 * Math.pow(1.1, matterRelatedData.replicatorLevel))// Prix fois 1.1
        document.getElementById("replicatorCost").innerHTML = nextCost //Actualise le prix du replicator dans l'HTML
    }
}

function buyReplicatorUpgrade() {
    if (matterRelatedData.matter >= matterRelatedData.repUpgradeCost) {
        matterRelatedData.replicatorUpgradeLevel += 1
        matterRelatedData.matter -= matterRelatedData.repUpgradeCost
        document.getElementById("replicatorUpgradeLevel").innerHTML = matterRelatedData.replicatorUpgradeLevel
        document.getElementById("matter").innerHTML = matterRelatedData.matter
        var nextCost = Math.floor(100 * Math.pow(5, matterRelatedData.replicatorUpgradeLevel))
        document.getElementById("upgradeCost").innerHTML = nextCost
        matterRelatedData.repUpgradeCost = nextCost
    }
}

function buyStorage() {
    var storageCost = Math.floor(25 * Math.pow(2, matterRelatedData.storageLevel))
    if (matterRelatedData.matter >= storageCost) {
        matterRelatedData.storageLevel += 1
        matterRelatedData.maxStorage += 200
        matterRelatedData.matter -= storageCost
        document.getElementById("storageLevel").innerHTML = matterRelatedData.storageLevel
        document.getElementById("matter").innerHTML = matterRelatedData.matter
        var nextCost = Math.floor(25 * Math.pow(2, matterRelatedData.storageLevel))
        document.getElementById("storageCost").innerHTML = nextCost
    }
}

function netResources() { //Calcul de la production par seconde
    var netMatter = matterRelatedData.matterPerClick //Cr�er la variable qui stock la production et y attribue la valeur de la production des replicator
    document.getElementById("netMatter").innerHTML = netMatter //Actualise l'HTML avec la valeur de la prod /s

    if (netMatter < 0) { //Si le /s est plus petit que 0 
        document.getElementById("netMatter").style.color = '#f00'; //Affiche en rouge
    } else if (netMatter == 0) { //sinon si le /s est neutre
        document.getElementById("netMatter").style.color = '#000'; //affiche en noir
    } else { //sinon 
        document.getElementById("netMatter").style.color = '#0b0'; //affiche en vert
    }
}*/
var resourcesActualColor = "white"
var researchActualColor = "white"
var diplomacyActualColor = "white"
resourcesTab()

function resourcesTab()
{
    if (resourcesActualColor == "white")
    {
        document.getElementById("resourcesTab").style.color = "#0080ff"
        resourcesActualColor = "blue"
    }
    if (researchActualColor != "white" || diplomacyActualColor != "white")
    {
        document.getElementById("researchTab").style.color = "white"
        document.getElementById("diplomacyTab").style.color = "white"
        researchActualColor = "white"
        diplomacyActualColor = "white"
    }
    document.getElementById("researchSection").style.display = "none"
    document.getElementById("diplomacySection").style.display = "none"
    document.getElementById("resourcesSection").style.display = "initial"
}

function researchTab()
{
    if (researchActualColor == "white")
    {
        document.getElementById("researchTab").style.color = "#0080ff"
        researchActualColor = "blue"
    }
    if (resourcesActualColor != "white" || diplomacyActualColor != "white")
    {
        document.getElementById("resourcesTab").style.color = "white"
        document.getElementById("diplomacyTab").style.color = "white"
        resourcesActualColor = "white"
        diplomacyActualColor = "white"
    }
    document.getElementById("researchSection").style.display = "initial"
    document.getElementById("diplomacySection").style.display = "none"
    document.getElementById("resourcesSection").style.display = "none"
}

function diplomacyTab()
{
    if (diplomacyActualColor == "white")
    {
        document.getElementById("diplomacyTab").style.color = "#0080ff"
        diplomacyActualColor = "blue"
    }
    if (researchActualColor != "white" || resourcesActualColor != "white")
    {
        document.getElementById("researchTab").style.color = "white"
        document.getElementById("resourcesTab").style.color = "white"
        researchActualColor = "white"
        resourcesActualColor = "white"
    }
    document.getElementById("researchSection").style.display = "none"
    document.getElementById("diplomacySection").style.display = "initial"
    document.getElementById("resourcesSection").style.display = "none"
}

window.setInterval(function () { //Boucle
    
}, 10);
