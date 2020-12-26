const cities :string[] =
    ["Caracas", "San Cristobal", "San Felipe", "Maracay", "Valencia"]

function randomCity() {
    return cities[ Math.floor( Math.random() * cities.length ) ]
}

module.exports = randomCity;