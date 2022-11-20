package app

import app.model.Image

/**
 * Created by Faisal Amir on 20/11/22
 * -----------------------------------------
 * E-mail   : faisalamircs@gmail.com
 * Github   : github.com/amirisback
 * -----------------------------------------
 * Copyright (C) Frogobox ID / amirisback
 * All rights reserved
 */

object Constant {

    val IMAGE_01 = Image(
        "Image 1",
        "Description Image 1",
        "https://amirisback.github.io/website-thumber/src/main/images/img_1.jpg"
    )

    val IMAGE_02 = Image(
        "Image 2",
        "Description Image 2",
        "https://amirisback.github.io/website-thumber/src/main/images/img_2.jpg"
    )

    fun createGallery(): List<Image> {
        val datas = mutableListOf<Image>()

        datas.add(IMAGE_01)
        datas.add(IMAGE_02)

        return datas
    }

}