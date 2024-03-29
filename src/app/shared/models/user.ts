export class User {
    id:Number
    name:String
    username:String
    email:String
    address:Address
    phone:String
    website:String
    company:Company

}

export class Address{
    street:String
    suite:String
    city:String
    zip:String
    geo:Geo
}

export class Geo{
    lat:String
    lng:String
}

export class Company{
    name:String
    catchPhrase:String
    bs:String
}
