const homeScreen = require("../screens/home.screen")
const loginScreen = require("../screens/login.screen")
const myStoreScreen = require("../screens/myStore.screen")
const productScreen = require("../screens/product.screen")
const { adicProduct } = require("../screens/product.screen")

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Access Admin Panel', () => {
    it('shoud login with valid credentials', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.continue()
        await loginScreen.continuecred()
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin (senha)
        await productScreen.adicProduct()
        await productScreen.clickAdd()


        //expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        //expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
    });   
})