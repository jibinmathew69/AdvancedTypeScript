class Library{
    titles: string[] | undefined
    
    constructor() {
        
    }   
}

let library = new Library()

let shortTitles = library.titles.filter(
    title => title.length < 5
)
