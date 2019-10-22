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
    if (isAdmin(usr)){
        routeToAdminPage(usr.role)
    }else{
        routeToHomePage(usr.email)
    }
}

function isAdmin(usr: Admin | User): usr is Admin{
    return (<Admin>usr).role !== undefined
}