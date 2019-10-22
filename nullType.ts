class Library{
    titles: string[]
    
    constructor() {
        this.titles = []
    }   
}

let library = new Library()

let shortTitles = library.titles.filter(
    title => title.length < 5
)
