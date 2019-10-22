function routeToAdminPage(page: string){

}
function routeToHomePage(page: string){
    
}

interface Admin{
    id: string
    role: string
}

interface User{
    email: string
}

function redirect(usr : Admin | User){
    if (/*user is Admin */){
        routeToAdminPage(usr.role)
    }else{
        routeToHomePage(usr.email)
    }
}