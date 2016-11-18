var assert = chai.assert;

suite('Room', function() {
    test('#changeLightStateEveryMultipleOf', function () {
        var i = 0;
        var x = new Room(20);

        x.changeLightStateEveryMultipleOf(2);

        for (i = 1 ; i < 20; i += 2) {
            assert.equal(x.lights[i].isOn, true);
        }

        x.changeLightStateEveryMultipleOf(3);

        for (i = 2; i < 20; i += 3) {
            if ((i + 1) % 2 == 0) {
                assert.equal(x.lights[i].isOn, false);
            }
            else {
                assert.equal(x.lights[i].isOn, true);
            }
        }
    });
});