function solve(obj) {
    if (obj.dizziness === true) {
        litrsOfWater = (obj.weight * 0.1) * obj.experience;
        obj.levelOfHydrated += litrsOfWater;
        obj.dizziness = false;
    
    }

    return obj
}