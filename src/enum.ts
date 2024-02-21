enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer',
}


type User = {
    username: string,
    role: ROLES
}


const user01: User = {
    username: 'Name',
    role: ROLES.ADMIN
}