// define elements
var atom = '.atom';
var electronShell = '.electron-shell';
var nucleus = '.nucleus';
var electron = '.electron';

// atom height same as width
var atomWidth = $(atom).width();
$(atom).css('height', atomWidth);

// length and arrays
var electronPathLength = $(electronShell).length;
var nucleus = $(nucleus).width();
var electronPathArray = [];

// meat part of the potatoes
for (var p = 0; p < electronPathLength; p++) {
    var path = p+1
    var pathSize = atomWidth / path;
    var halfSize = pathSize/2;
    var pathPosition = (100 - (100/electronPathLength)*path);
    var reversePathPosition = 100 - (100 - (100/electronPathLength)*path);

    var additionalWidth = 35 * electronPathLength;
    var growingAtom = atomWidth + additionalWidth;
    var radiusSize = growingAtom / 200;

    // grow the atom when more shells are added
    if (electronPathLength > 1) {
        $(atom).css({
            'width': growingAtom,
            'height': growingAtom
        });
    }

    console.log(growingAtom);

    // Equally space electrons in shell
    var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
        radius = (reversePathPosition * radiusSize) + "px", //distance from center
        start = 0, //shift start from 0
        $elements = $("" + electronShell + ":nth-child(" + path + ") " + electron + ""),
        numberOfElements = (type === 1) ? $elements.length : $elements.length - 1,
        slice = 360 * type / numberOfElements;

    $elements.each(function(i) {
        var $self = $(this),
            rotate = slice * i + start,
            rotateReverse = rotate * -1;

        $self.css({
            'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
        });
    });

    // add styles from equal spacing function
    $(".electron-shell:nth-child(" + path + ")").css({
        'width': reversePathPosition + "%",
        'height': reversePathPosition + "%",
        'top': pathPosition  + "%",
        'left': pathPosition  + "%",
        'margin-left': -pathPosition/2 + "%",
        'margin-top': -pathPosition/2 + "%"
    });
} // end loop
