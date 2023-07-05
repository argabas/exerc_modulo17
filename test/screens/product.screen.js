class AddProduct {
    
    get #product() {return $('android=new UiSelector().text("Products")')}
    get #addproduct() {return $('id:android.widget.ImageButton')}

    async adicProduct () {
        await this.#product.waitForExist({ timeout: 20000 })
        return await this.#product.click()
    }
    
    async clickAdd () {
        await this.#addproduct.waitForExist({ timeout: 20000 })
        return await this.#addproduct.click()
    }

}

module.exports = new AddProduct()