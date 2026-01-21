let sets = [];

class set {
    constructor( element_id, type, collection, count = 1 ) {
        this.collection = collection;
        this.id = element_id;
        this.type = type;
        this.count = count;

        this.collected = [];

        sets.push( this );
    }

    random() {
        // gamblerise
        return Math.floor( Math.random() * this.collection.length );
    }

    pull( index ) {
        let limit = 0;
        let selected = "";

        if( this.collection.length < 1 ) {
            limit = this.collected.length;
            for( let i = 0; i < limit; i += 1 ) {
                this.collection.push( this.collected.splice( 0, 1 )[0] );
            }
        }

        selected = this.collection.splice( index, 1 );
        selected = selected[0];

        this.collected.push( selected );

        return selected;
    }

    apply() {
        let selected = "";
        let element = document.getElementById( this.id );

        if( element === null ) return;

        for( let i = 0; i < this.count; i += 1 ) {
            if( i > 0 ) selected += ", "; 
            selected += this.pull( this.random() );
        }

        //console.log( "collection" );
        //console.log( this.collection );
        //console.log( "collected" );
        //console.log( this.collected );

        if( this.type === "image" ) element.style.backgroundImage = "url( 'img/" + selected + "' )";
        else if( this.type === "text" ) element.textContent = selected;
    }
}
