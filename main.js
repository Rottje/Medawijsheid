new set(
    "head",
    "image",
    [
        "face_1.png", "face_2.png", "face_3.png", "face_4.png", "face_5.png", "face_6.png", "face_7.png", "face_8.png",
        "face_9.png", "face_10.png", "face_11.png", "face_12.png", "face_13.png", "face_14.png", "face_15.png", "face_16.png",
        "face_17.png"
    ]
);

new set(
    "body",
    "image",
    [
        "body_1.png", "body_2.png", "body_3.png", "body_4.png", "body_5.png", "body_6.png", "body_7.png", "body_8.png",
        "body_9.png", "body_10.png", "body_11.png", "body_12.png", "body_13.png", "body_14.png", "body_15.png", "body_16.png",
        "body_17.png"
    ]
);

new set( 
    "interests",
    "text",
    [ 
        "voetbal", "hockey", "handbal", "mode", "lange wandelingen", "video games", "films", "poëzie", "lezen", 
        "horror", "rock muziek", "jazz muziek", "electronische muziek", "feesten", "reizen", "computers", "eten",
        "architectuur", "geschiedenis", "breien", "handbal", "sleutelen", "autos", "motors", "handbal", "zwemmen"
    ], 3
);

new set( 
    "favourite",
    "text",
    [ 
        "gezichtenboek", "fotosdelen", "lekkerkijken", "mooieschoenen", "elkpakketjesnelaanhuis", "allesoversport", 
        "nieuwenieuws", "tiktak", "feestbeest", "digitalebieb", "filmsfilmsfilms", "alleendebestegames"
    ]
);


new set( 
    "background",
    "text",
    [ 
        "huisbeheerder", "ondernemer", "burgemeester", "ambtenaar", "loonwerker", "gepensioneerd", "student", 
        "leerling", "leerling", "ouder", "grootouder"
    ]
);

new set( 
    "location",
    "text",
    [ 
        "Rotterdam", "Den Haag", "Utrecht", "Zaanstad", "Brielle", "Oostvoorne", "Hellevoetsluis", "Krimpen", "Kampen",
        "Hilversum", "Dordrecht", "Delft", "Rockanje", "Spijkenisse", "Groningen"
    ]
);


document.addEventListener( "readystatechange", function( event ) {
    if( document.readyState == "interactive" ) {
        layout();

        document.getElementById( "randomiser_button" ).addEventListener( "click", function( event ) {
            randomise( event );
        });
    }
});

window.onresize = function() {
    layout();
}

function layout() {
    let window_width = window.innerWidth;
    let window_height = window.innerHeight;
    let body_h_offset = window_width * ( window_height > window_width ? 0.1 : 0.25 );
    let text_h_offset = window_width * 0.6;
    let text_v_offset = window_height * 0.9;

    let head = document.getElementById( "head" );
    let body = document.getElementById( "body" );
    let button = document.getElementById( "randomiser_button" );
    let texts = document.getElementsByClassName( "textbox" );
    let limit = texts.length;

    text_v_offset /= limit;

    head.style.width = ( window_height * 0.3 ) + "px";
    head.style.height = head.style.width;
    head.style.left = body_h_offset + "px";
    head.style.top = ( window_height * 0.1 ) + "px"

    body.style.width = head.style.width;
    body.style.height = ( window_height * 0.5 ) + "px";
    body.style.left = head.style.left;
    body.style.bottom = head.style.top;

    for( let i = 0; i < limit; i += 1 ) {
        texts[i].style.width = head.style.left;
        texts[i].style.left = text_h_offset + "px";
        texts[i].style.top = ( text_v_offset * i + text_v_offset / limit ) + "px";
    }

    if( window_width > window_height ) {
        button.style.height = "6vw";
        button.style.fontSize = "5vw";
    } else {
        button.style.height = "10vh";
        button.style.fontSize = "4vh";
    }
}

function randomise( event ) {
    let texts = document.getElementsByClassName( "textbox" );
    let limit = sets.length;

    for( i = 0; i < limit; i += 1 ) {
        sets[i].apply();
    }

    limit = texts.length;
    for( let i = 0; i < limit; i += 1 ) {
        texts[i].style.visibility = "visible";
    }
};
