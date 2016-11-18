function Light() {
    this.isOn = false;
}

function Room(numberOfLights) {
    this.lights = [];
    this.lightsTurnedOn = [];
    this.changeLightStateEveryMultipleOf = function(multiple) {
        this.lightsTurnedOn = [];
        
        for (var j = multiple - 1; j < this.lights.length; j += multiple) {
            var light = this.lights[j];
            light.isOn = !light.isOn;

            if (light.isOn) {
                this.lightsTurnedOn.push(j + 1);
            }
        }
    }

    for (var i = 0; i < numberOfLights; i++) {
        this.lights.push(new Light());
    }
}