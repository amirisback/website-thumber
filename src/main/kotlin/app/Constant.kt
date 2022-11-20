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

    fun createGallery(): List<Image> {
        val datas = mutableListOf<Image>()

        datas.add(Image("Image 1", "Description 1", "https://picsum.photos/200/300"))

        return datas
    }

}