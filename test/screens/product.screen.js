class AddProduct {
    
    get #product() {return $('~Products')}
    get #addproduct() {return $('id:addProductButton')}
    get #prodphyscal() {return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]')}
    get #addnameproduct() {return $('android=new UiSelector().text("Enter Product Title")')}
    get #publish() {return $('id=menu_done')}
    get #test() {return $('//android.widget.ImageView[@content-desc="More options"]')}

    async adicProduct () {
        await this.#product.waitForExist({ timeout: 20000 })
        await this.#product.click()
    }
    
    async clickAdd () {
        await this.#addproduct.waitForExist({ timeout: 20000 })
        await this.#addproduct.click()
    }

    async clickProdPhysical () {
        await this.#prodphyscal.waitForExist({ timeout: 20000 })
        await this.#prodphyscal.click()
    }
    
    async nameProduct (nomeProduto) {
        await this.#addnameproduct.waitForExist({ timeout: 20000 })
        await this.#addnameproduct.setValue(nomeProduto)
        await this.#publish.click()
    }

    async truetest () {
        await this.#test.waitForExist({ timeout: 20000 })
        return await this.#test.isDisplayed()
    }

}

module.exports = new AddProduct()