var assert = chai.assert;

suite('Room', function() {
    test('#changeLightStateEveryMultipleOf', function() {
        var i = 0;
        var room = new Room(20);

        room.changeLightStateEveryMultipleOf(2);

        for (i = 1 ; i < 20; i += 2) {
            assert.equal(room.lights[i].isOn, true);
        }

        room.changeLightStateEveryMultipleOf(3);

        for (i = 2; i < 20; i += 3) {
            if ((i + 1) % 2 == 0) {
                assert.equal(room.lights[i].isOn, false);
            }
            else {
                assert.equal(room.lights[i].isOn, true);
            }
        }
    });
    test('#setNumberOfLights', function() {
        var room = new Room(5);

        assert.equal(room.lights.length, 5);

        room.setNumberOfLights(25);

        assert.equal(room.lights.length, 25);
    })
});