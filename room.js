function Light(position) {
    this.position = position;
    this.isOn = false;
}

function Room(numberOfLights) {
    this.lights = [];
    this.changeLightStateEveryMultipleOf = function(multiple) {
        for (var j = multiple - 1; j < this.lights.length; j += multiple) {
            var light = this.lights[j];
            light.isOn = !light.isOn;
        }
    }
    this.setNumberOfLights = function(count) {
        this.lights = [];
        for (var i = 1; i <= count; i++) {
            var light = new Light(i);
            this.lights.push(light);
        }
    }

    this.setNumberOfLights(numberOfLights);
}