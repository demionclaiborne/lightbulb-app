function Light() {
    this.isOn = false;
}

function Room(numberOfLights) {
    this.lights = [];
    this.changeLightStateEveryMultipleOf = function(multiple) {
        for (var j = multiple - 1; j < this.lights.length; j += multiple) {
            this.lights[j].isOn = !this.lights[j].isOn;
        }
    }

    for (var i = 0; i < numberOfLights; i++) {
        this.lights.push(new Light());
    }
}